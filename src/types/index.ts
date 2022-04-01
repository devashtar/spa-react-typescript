export interface IUser {
  id: number
  name: string
  imgUrl: string
  companyName: string
  posts: Array<{
    title: string
    body: string
  }>
}

export type TypeDataUsers = Array<{
  id: number
  name: string
  company: {
    name: string
  }
}>

export type TypeDataPosts = Array<{
  userId: number
  id: number
  title: string
  body: string
}>
