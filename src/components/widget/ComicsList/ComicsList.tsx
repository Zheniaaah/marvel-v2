import React, { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  ComicInfo,
  ComicItem,
  ComicPrice,
  ComicTitle,
  Container,
  ListContainer,
  StyledButton,
  Thumbnail,
} from './styles'

import { Loader } from '~/components/shared'
import { ButtonStyle, LoaderStyle, Route } from '~/constants'
import { concatThumbnailUrl, replaceParams } from '~/functions'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const ComicsList: React.FC = () => {
  const { offset, results, loading, error } = useAppSelector((state) => state.comics)
  const dispatch = useAppDispatch()

  const updateComics = useCallback(() => {
    dispatch(actions.comics.loadComics())
  }, [dispatch])

  useEffect(() => {
    if (!results.length) updateComics()
  }, [results, updateComics])

  return (
    <>
      <Container>
        <ListContainer>
          {!error &&
            results.map(({ id, title, prices, thumbnail }) => (
              <ComicItem key={id}>
                <Link to={replaceParams(Route.Comic, { id: id! })}>
                  <Thumbnail
                    src={concatThumbnailUrl(thumbnail)}
                    alt="title"
                    $thumbnail={!concatThumbnailUrl(thumbnail).includes('image_not_available')}
                  />
                  <ComicInfo>
                    <ComicTitle>{title}</ComicTitle>
                    <ComicPrice>
                      {prices[0].price ? `${prices[0].price}$` : 'not available'}
                    </ComicPrice>
                  </ComicInfo>
                </Link>
              </ComicItem>
            ))}
        </ListContainer>
        {loading && offset === 0 && <Loader size={100} />}
        {(error || offset !== 0) && (
          <StyledButton
            view={ButtonStyle.Red}
            onClick={updateComics}
            disabled={loading}
            width={170}
          >
            {loading ? (
              <Loader size={18} color={LoaderStyle.White} />
            ) : error ? (
              'try again'
            ) : (
              'load more'
            )}
          </StyledButton>
        )}
      </Container>
    </>
  )
}

export default React.memo(ComicsList)
