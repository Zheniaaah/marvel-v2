import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
  Container,
  ErrorImg,
  Info,
  InfoDescription,
  InfoPrice,
  InfoTitle,
  LoaderContainer,
  Thumbnail,
} from './styles'

import errorImg from '@/images/error.gif'
import { Loader } from '~/components/shared'
import { concatThumbnailUrl } from '~/functions'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const Page: React.FC = () => {
  const { title, description, prices, thumbnail, loading, error } = useAppSelector(
    (state) => state.comic,
  )
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(actions.comic.loadComic(Number(id!)))
  }, [dispatch, id])

  return (
    <>
      {!loading && !error && (
        <Container>
          <Thumbnail src={concatThumbnailUrl(thumbnail)} alt="thumbnail" />
          <Info>
            <InfoTitle>{title}</InfoTitle>
            <InfoDescription>
              {description ? description : 'There is no description'}
            </InfoDescription>
            <InfoPrice>{prices[0]?.price ? prices[0].price : 'not available'}</InfoPrice>
          </Info>
        </Container>
      )}
      {loading && (
        <LoaderContainer>
          <Loader size={100} />
        </LoaderContainer>
      )}
      {error && <ErrorImg src={errorImg} alt="error" />}
    </>
  )
}

export default React.memo(Page)
