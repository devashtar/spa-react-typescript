import React from 'react'
import * as Styled from './styled'
import { observer } from 'mobx-react-lite'
import { globalStore } from '@store'

import { Plug } from '@components/Plug'

export const Article: React.FC<{}> = observer(() => {
  const posts =
    globalStore.activeUser?.posts.slice(0, globalStore.maxArticles) || []

  return (
    <Styled.Section>
      {globalStore.activeUser !== null ? (
        <Styled.Container>
          <Styled.QuoteBlock></Styled.QuoteBlock>
          <Styled.ArticleBlock>
            <Styled.Title>
              3 актуальных поста {globalStore.activeUser?.name}
            </Styled.Title>
            <Styled.ListArticles>
              {posts.map((el, idx) => (
                <Styled.Article key={idx}>
                  <Styled.Name>{el.title}</Styled.Name>
                  <Styled.Text>{el.body}</Styled.Text>
                </Styled.Article>
              ))}
            </Styled.ListArticles>
          </Styled.ArticleBlock>
        </Styled.Container>
      ) : (
        <Plug />
      )}
    </Styled.Section>
  )
})
