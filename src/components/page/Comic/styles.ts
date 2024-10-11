import styled from 'styled-components'

import { Color } from '~/constants'

export const ErrorImg = styled.img`
  width: 300px;
  height: 450px;
  margin: 0 auto;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50lvh;
`

export const InfoPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  color: ${Color.CrimsonRed};
  text-transform: uppercase;
  margin-top: 25px;
`

export const InfoDescription = styled.p`
  font-size: 18px;
  line-height: 24px;
  margin-top: 25px;
`

export const InfoTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  line-height: 29px;
`

export const Info = styled.div``

export const Thumbnail = styled.img`
  width: 293px;
  height: 450px;
  border-radius: 7px;
`

export const Container = styled.div`
  align-self: flex-start;
  display: grid;
  grid-template-columns: 293px 550px auto;
  column-gap: 50px;
`
