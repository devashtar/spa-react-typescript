import styled from 'styled-components'

const prefix = process.env.PUBLIC_URL + '/images/'

export const Container = styled.div`
  background: right top 1.25rem / auto 20.625rem no-repeat
    url(${prefix + 'bg.svg'});
  margin-top: 1.875rem;

  width: 100%;
  height: auto;
`

export const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;

  width: 100%;
`

export const Btn = styled.button`
  background: white center / 3rem no-repeat url(${prefix + 'arrow.svg'});
  content: '';
  margin: 0;
  padding: 0;

  width: 3rem;
  height: 3rem;

  border: none;
  border-radius: 50%;

  cursor: pointer;

  box-shadow: 0px 0px 3px 1px rgba(0, 0, 0, 0.3);
  transition: all ease-in 0.1s;

  &:disabled {
    opacity: 0.5;
    cursor: initial;
    box-shadow: none;
  }

  &:hover:not(:disabled) {
    transition: all ease-in 0.1s;
    background-size: 2.875rem;
    box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
  }

  &:first-child {
    transform: rotate(180deg);
  }
  &:last-child {
    margin-left: 1.25rem;
  }
`

export const Carousel = styled.div`
  margin-top: 1.25rem;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 400px;
`

export const OuterBlock = styled.div<{ width: number }>`
  position: relative;

  height: inherit;
  width: ${(props) => props.width}px;

  overflow: hidden;
`

export const InnerBlock = styled.ul<{ x: number }>`
  position: absolute;
  left: ${(props) => props.x}px;
  top: 0;

  margin: 0;
  padding: 0;
  list-style-type: none;

  display: flex;
  flex-wrap: nowrap;

  height: 100%;

  transition: all ease-in-out 0.3s;
`

export const Item = styled.li<{ width: number; margin: number }>`
  background-color: white;
  position: relative;

  display: block;
  width: ${(props) => props.width || 290}px;
  height: 100%;

  cursor: pointer;

  &:hover::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;

    display: block;
    width: 100%;
    height: 100%;

    border-top: 2px solid var(--secondary-color);
    border-bottom: 2px solid var(--secondary-color);
  }

  &:not(:first-child) {
    margin-left: ${(props) => props.margin || 40}px;
  }

  &.active {
    & > p {
      color: var(--secondary-color);
    }

    & > div::after {
      content: '';
      position: absolute;
      left: 0;
      top: 0;

      display: block;
      width: 100%;
      height: 100%;

      border-bottom: 5px solid var(--secondary-color);
    }
  }
`

export const ImgWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 320px;

  overflow: hidden;
`

export const Img = styled.img`
  display: block;
  height: 100%;
`

export const Name = styled.p`
  margin: 18px 0px 0px 0px;
  padding: 0;

  font-family: inherit;
  font-size: 1.125rem;
  font-weight: 500;
  line-height: 2rem;

  color: var(--primary-color);
`

export const CompanyName = styled.p`
  margin: 0;
  padding: 0;

  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 400;
  line-height: 1.6875rem;

  color: var(--light-gray);
`
