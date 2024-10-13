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
import { usePreloadData } from '~/hooks'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const ComicsList: React.FC = () => {
  const { offset, results, scrollPosition, loading, error } = useAppSelector(
    (state) => state.comics,
  )
  const dispatch = useAppDispatch()

  const [isPending, preloadedData] = usePreloadData({
    data: results,
    builder: ({ id, title, prices, thumbnail }, i) => (
      <ComicItem key={i}>
        <Link to={replaceParams(Route.Comic, { id: id! })}>
          <Thumbnail
            src={concatThumbnailUrl(thumbnail)}
            alt="title"
            $thumbnail={!concatThumbnailUrl(thumbnail).includes('image_not_available')}
          />
          <ComicInfo>
            <ComicTitle>{title}</ComicTitle>
            <ComicPrice>{prices[0].price ? `${prices[0].price}$` : 'not available'}</ComicPrice>
          </ComicInfo>
        </Link>
      </ComicItem>
    ),
    scrollPosition: scrollPosition,
    setScrollPosition: actions.comics.updateScrollPosition,
  })

  useEffect(() => {
    if (!results.length) updateComics()
  }, [results])

  const updateComics = useCallback(() => {
    dispatch(actions.comics.loadComics())
  }, [])

  return (
    <>
      <Container>
        <ListContainer>{!error && preloadedData}</ListContainer>
        {(loading || isPending) && offset === 0 && <Loader size={100} />}
        {(error || offset !== 0) && (
          <StyledButton
            view={ButtonStyle.Red}
            onClick={updateComics}
            disabled={loading || isPending}
            width={170}
          >
            {loading || isPending ? (
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
