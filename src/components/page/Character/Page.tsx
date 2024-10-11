import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import {
  Container,
  ErrorImg,
  Info,
  InfoDescription,
  InfoName,
  LoaderContainer,
  Thumbnail,
} from './styles'

import errorImg from '@/images/error.gif'
import { Loader } from '~/components/shared'
import { concatThumbnailUrl } from '~/functions'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const Page: React.FC = () => {
  const { name, description, thumbnail, loading, error } = useAppSelector(
    (state) => state.character,
  )
  const dispatch = useAppDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(actions.character.loadCharacter(Number(id!)))
  }, [dispatch, id])

  return (
    <>
      {!loading && !error && (
        <Container>
          <Thumbnail src={concatThumbnailUrl(thumbnail)} alt="thumbnail" />
          <Info>
            <InfoName>{name}</InfoName>
            <InfoDescription>
              {description ? description : 'There is no description for this character'}
            </InfoDescription>
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
