import styled from 'styled-components'

export const Plug = styled.img`
  display: block;
  width: 100px;
  height: 100px;

  animation: hide-show 2s linear infinite;

  @keyframes hide-show {
    0% {
      opacity: 0.1;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.1;
    }
  }
`
