import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Color } from '~/constants'

const block = css`
  border-radius: 7px;
  box-shadow: 5px 5px 20px ${hexToRgba(Color.Black, 0.25)};
`

export const StaticDecoration = styled.img`
  position: absolute;
  bottom: 14px;
  right: -37px;
`

export const StaticTitle = styled.p`
  font-size: 24px;
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 32px;
  color: ${Color.White};

  &:nth-child(2) {
    margin: 33px 0 20px;
  }
`

export const Static = styled.div`
  ${block};
  position: relative;
  background-color: ${Color.DarkCharcoal};
  padding: 40px 35px;
`

export const ErrorImage = styled.img`
  width: 250px;
  height: 250px;
`

export const StyledLink = styled.a``

export const BlockButtons = styled.div`
  display: flex;
  gap: 15px;
`

export const BlockDescription = styled.p`
  font-size: 14px;
  line-height: 18px;
`

export const BlockName = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 29px;
  text-transform: uppercase;
`

export const BlockInfo = styled.div`
  display: grid;
  grid-template-rows: minmax(29px, auto) 90px 38px;
  row-gap: 10px;
`

export const BlockThumbnail = styled.img`
  width: 180px;
  height: 180px;
  object-fit: cover;
`

export const Block = styled.div`
  display: grid;
  grid-template-columns: 180px auto;
  align-items: center;
  column-gap: 30px;
  padding: 40px 35px;
`

export const BlockContainer = styled.div`
  ${block};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Color.White};
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 10px));
  column-gap: 20px;
  width: 100%;
  margin-bottom: 50px;
`
