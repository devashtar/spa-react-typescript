import { runInAction, makeAutoObservable } from 'mobx'
import { IUser, TypeDataUsers, TypeDataPosts } from '@types'

const resolution = '300'
const listImgUrl = [8, 11, 12, 15, 53, 56, 58, 60, 61, 69].map(
  (id) => `https://i.pravatar.cc/${resolution}?img=${id}`
) as Array<string>

class GlobalStore {
  isLoading: boolean
  users: Array<IUser>
  activeUser: IUser | null
  maxArticles: number

  constructor() {
    this.isLoading = false
    this.users = []
    this.activeUser = null
    this.maxArticles = 3

    makeAutoObservable(this)
  }

  async init() {
    this.isLoading = true
    const data = await this.getData()
    if (data !== null) {
      // runInAction - если меняем данные в хранилище после async action
      runInAction(() => {
        for (const user of data.users) {
          this.users.push({
            id: user.id,
            name: user.name,
            imgUrl: listImgUrl[user.id - 1],
            companyName: user.company.name,
            posts: data.posts.filter(({ userId }) => userId === user.id)
          })
        }
      })
    }
    runInAction(() => {
      this.isLoading = false
    })
  }

  async getData() {
    let users = null,
      posts = null

    try {
      users = (await this.fetchData(
        'https://jsonplaceholder.typicode.com/users'
      )) as TypeDataUsers
      posts = (await this.fetchData(
        'https://jsonplaceholder.typicode.com/posts'
      )) as TypeDataPosts
    } catch (err) {
      if (err instanceof Error) {
        err.message += `Произошла ошибка во время загрузки данных пользователей.\n`
      }
      console.error(err)
    } finally {
      if (users == null || posts === null) {
        return null
      }
      return { users, posts }
    }
  }

  async fetchData(url: string) {
    try {
      const response = await fetch(url)
      if (response.ok) {
        const jsonObj = await response.json()
        return jsonObj
      }
      throw new Error(`Status code: ${response.ok}\n`)
    } catch (err) {
      throw err
    }
  }

  setActiveUser(obj: IUser) {
    this.activeUser = obj
  }
}

export const globalStore = new GlobalStore()
