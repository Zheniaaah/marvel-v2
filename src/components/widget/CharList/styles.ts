import hexToRgba from 'hex-to-rgba'
import styled, { css } from 'styled-components'

import { Button } from '~/components/shared'
import { Color } from '~/constants'

interface IThumbnailProps {
  $thumbnail: boolean
}

interface IItemProps {
  $selected: boolean
}

export const CharContainer = styled.div`
  position: sticky;
  top: 20px;
  height: min-content;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const StyledButton = styled(Button)`
  margin-top: 45px;
`

export const CharName = styled.p`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 90px;
  font-size: 22px;
  font-weight: 700;
  line-height: 29px;
  text-align: center;
  text-transform: uppercase;
  color: ${Color.White};
  border-radius: 0 0 7px 7px;
  background-color: ${hexToRgba(Color.DarkCharcoal, 0.6)};
  backdrop-filter: blur(10px);
  z-index: 2;
  padding: 8px 15px;
`

export const CharThumbnail = styled.img<IThumbnailProps>`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  object-fit: ${({ $thumbnail }) => ($thumbnail ? 'cover' : 'unset')};
  pointer-events: none;
`

export const CharItem = styled.li<IItemProps>`
  cursor: pointer;
  width: 200px;
  position: relative;
  height: 318px;
  border-radius: 7px;
  box-shadow: 5px 5px 10px ${hexToRgba(Color.Black, 0.25)};
  transition: transform 0.3s;

  ${({ $selected }) =>
    $selected &&
    css`
      box-shadow: 0 5px 20px ${Color.CrimsonRed};
      transform: translateY(-8px);
    `}
`

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 200px);
  column-gap: 25px;
  row-gap: 30px;
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 650px 425px;
  column-gap: 25px;
`
