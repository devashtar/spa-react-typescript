import styled from 'styled-components'

const prefix = process.env.PUBLIC_URL + '/images/'

export const Section = styled.section`
  background: left -4.5rem bottom / auto 20.625rem no-repeat url(${prefix + 'bg.svg'});

  margin: 3rem 0px 0px 0px;
  padding: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 400px;

  @media screen and (max-width: 1024px) {
    background: none;
  }
`

export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  height: auto;

  animation: grow-height 1s ease-in 1;

  @keyframes grow-height {
    0% {
      max-height: 0px;
    }
    100% {
      max-height: 9999px;
    }
  }

  overflow: hidden;

  display: grid;
  grid-template-columns: 290px 1fr;
  grid-template-rows: auto;
  grid-gap: 40px;

  @media screen and (max-width: 1024px) {
    padding: 0px 4rem;

    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
    grid-gap: 1.875rem;
  }

  @media screen and (max-width: 480px) {
    padding: 0px 1rem;
  }
`

export const QuoteBlock = styled.div`
  --height: 4.625rem;
  content: '';
  background: right top / auto var(--height) no-repeat
    url(${prefix + 'quotes.svg'});
  width: 100%;
  height: var(--height);

  @media screen and (max-width: 1024px) {
    background-position: left bottom;
  }
`

export const ArticleBlock = styled.div`
  width: 100%;
`

export const Title = styled.h2`
  margin: 0;
  padding: 0;

  font-family: inherit;
  font-size: 2.25rem;
  font-weight: 600;
  line-height: 3rem;
  color: var(--primary-color);

  @media screen and (max-width: 1024px) {
    text-align: center;
  }
`

export const ListArticles = styled.ul`
  margin: 2.5rem 0px 0px 0px;
  padding: 0;
  list-style-type: none;
`

export const Article = styled.li`
  margin-top: 2.25rem;
`

export const Name = styled.p`
  margin: 0;
  padding: 0;

  &::first-letter {
    text-transform: uppercase;
  }
  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 1.625rem;
  color: var(--primary-color);
`

export const Text = styled.p`
  margin: 0.75rem 0px 0px 0px;
  padding: 0;

  &::first-letter {
    text-transform: uppercase;
  }
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.625rem;
  color: var(--light-gray);
`
