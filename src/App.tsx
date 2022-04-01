import React, { useEffect } from 'react'
import * as Styled from './App.styled'
import { globalStore } from './store'

import { Header } from '@components/Header'
import { Carousel } from '@components/Carousel'
import { Article } from '@components/Article'

export const App: React.FC<{}> = () => {
  useEffect(() => {
    if (globalStore.users.length === 0) {
      globalStore.init()
    }
  }, [])

  return (
    <Styled.Main>
      <Styled.Container>
        <Header />
        <Carousel />
        <Article />
      </Styled.Container>
    </Styled.Main>
  )
}
