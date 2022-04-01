import React from 'react'
import * as Styled from './styled'

export const Header: React.FC<{}> = () => {
  return (
    <Styled.Header>
      <Styled.Title>Наши топ-блогеры</Styled.Title>
      <Styled.Subtitle>
        Лучшие специалисты в своём деле,
        <br />
        средний опыт работы в профессии 27 лет.
      </Styled.Subtitle>
    </Styled.Header>
  )
}
