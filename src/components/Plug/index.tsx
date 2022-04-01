import React from 'react'
import * as Styled from './styled'

const prefix = process.env.PUBLIC_URL + '/images/'

export const Plug: React.FC<{}> = () => {
  return <Styled.Plug src={prefix + 'article.svg'} alt='picture the article' />
}
