import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import * as Styled from './styled'

import { globalStore } from '@store'
import { Loader } from '@components/Loader'

export const Carousel: React.FC<{}> = observer(() => {
  const [countDisplayCards, setCountDisplayCards] = useState(4) // 4 by default
  const [curCard, setCurCard] = useState(0) // 0 - первая карточка
  const [width, setWidth] = useState(1280) // ширина окна(блока) карточек
  const [cardWidth, setCardWidth] = useState(290) // ширина карточки
  const [marginCard, setMarginCard] = useState(40) // отступы между карточек

  useEffect(() => {
    function calcWidth() {
      const maxWidth = window.innerWidth < 1280 ? window.innerWidth : 1280

      if (maxWidth < 640) {
        setCardWidth(270)
        setMarginCard(30)
      } else {
        setCardWidth(290)
        setMarginCard(40)
      }

      for (let i = 0, currentWidth = 0; true; i++) {
        currentWidth += cardWidth
        currentWidth += i === 0 ? 0 : marginCard
        if (currentWidth > maxWidth) {
          currentWidth -= cardWidth + marginCard
          setWidth(currentWidth)
          setCountDisplayCards(i)
          break
        }
      }
    }
    calcWidth()
    window.addEventListener('resize', calcWidth)
    return () => window.removeEventListener('resize', calcWidth)
  }, [cardWidth, marginCard])

  const shiftCard = (shift: -1 | 1) => {
    setCurCard((num) => num + shift)
  }

  return (
    <Styled.Container>
      <Styled.BtnWrapper>
        <Styled.Btn
          disabled={curCard - 1 < 0}
          onClick={() => shiftCard(-1)}
        ></Styled.Btn>
        <Styled.Btn
          disabled={curCard + countDisplayCards + 1 > globalStore.users.length}
          onClick={() => shiftCard(1)}
        ></Styled.Btn>
      </Styled.BtnWrapper>
      <Styled.Carousel>
        <Styled.OuterBlock width={width}>
          <Styled.InnerBlock x={curCard * (cardWidth + marginCard) * -1 || 0}>
            {globalStore.users.length !== 0
              ? globalStore.users.map((el, idx) => (
                  <Styled.Item
                    key={idx}
                    onClick={() => globalStore.setActiveUser(el)}
                    className={
                      globalStore.activeUser?.id === el.id ? 'active' : ''
                    }
                    width={cardWidth}
                    margin={marginCard}
                  >
                    <Styled.ImgWrapper>
                      <Styled.Img src={el.imgUrl} alt='photo the human' />
                    </Styled.ImgWrapper>
                    <Styled.Name>{el.name}</Styled.Name>
                    <Styled.CompanyName>{el.companyName}</Styled.CompanyName>
                  </Styled.Item>
                ))
              : ''}
          </Styled.InnerBlock>
          {globalStore.isLoading ? <Loader /> : ''}
        </Styled.OuterBlock>
      </Styled.Carousel>
    </Styled.Container>
  )
})
