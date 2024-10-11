import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

import { Button } from '~/components/shared'
import { Color } from '~/constants'

interface IThumbnailProps {
  $thumbnail: boolean
}

export const StyledButton = styled(Button)`
  margin: 45px auto 0;
`

export const ComicPrice = styled.p`
  color: ${Color.CrimsonRed};
  text-transform: uppercase;
`

export const ComicTitle = styled.p`
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  color: ${Color.White};
  margin-bottom: 5px;
`

export const ComicInfo = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 110px;
  border-radius: 0 0 7px 7px;
  background-color: ${hexToRgba(Color.DarkCharcoal, 0.6)};
  backdrop-filter: blur(10px);
  z-index: 2;
  padding: 8px 15px;
`

export const Thumbnail = styled.img<IThumbnailProps>`
  width: 100%;
  height: 100%;
  border-radius: 7px;
  object-fit: ${({ $thumbnail }) => ($thumbnail ? 'cover' : 'unset')};
  pointer-events: none;
`

export const ComicItem = styled.li`
  position: relative;
  width: 225px;
  height: 345px;
  border-radius: 7px;
  box-shadow: 5px 5px 10px ${hexToRgba(Color.Black, 0.25)};
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-8px);
  }
`

export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 225px);
  justify-content: space-between;
  row-gap: 55px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
