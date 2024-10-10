import hexToRgba from 'hex-to-rgba'
import styled, { keyframes } from 'styled-components'

import { Color } from '~/constants'

interface IThumbnailProps {
  $thumbnail: boolean
}

interface ISkeletonLineProps {
  $mini?: boolean
}

const pulse = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`

export const ErrorImage = styled.img`
  width: 250px;
  height: 250px;
`

export const ComicItem = styled.li`
  width: 100%;
  line-height: 25px;
  border-radius: 7px;
  box-shadow: 0 4px 4px ${hexToRgba(Color.Black, 0.25)};
  padding: 0 10px;
  margin-top: 10px;
`

export const ComicsList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ComicsTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin-bottom: 10px;
`

export const CharDescription = styled.p`
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 10px;
`

export const CharButtons = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const CharName = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 29px;
  text-transform: uppercase;
`

export const CharNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 35px;
`

export const CharThumbnail = styled.img<IThumbnailProps>`
  width: 150px;
  height: 150px;
  border-radius: 7px;
  object-fit: ${({ $thumbnail }) => ($thumbnail ? 'cover' : 'unset')};
`

export const CharBasics = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
  column-gap: 25px;
  margin-bottom: 15px;
`

export const SkeletonLine = styled.div<ISkeletonLineProps>`
  width: 100%;
  height: ${({ $mini }) => ($mini ? '16px' : '35px')};
  border-radius: 7px;
  background-color: ${Color.LightGray};
  animation: ${pulse} 1.5s ease-in-out 0.5s infinite;
`

export const SkeletonCircle = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 100%;
  background-color: ${Color.LightGray};
  animation: ${pulse} 1.5s ease-in-out 0.5s infinite;
`

export const SkeletonHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const Skeleton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
`

export const CharSelect = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
  margin-bottom: 30px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 294px;
  height: fit-content;
  border-radius: 7px;
  background-color: ${Color.White};
  box-shadow: 0 0 20px ${hexToRgba(Color.Black, 0.25)};
  padding: 25px;
`
