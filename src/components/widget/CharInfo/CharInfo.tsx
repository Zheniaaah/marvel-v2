import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  CharBasics,
  CharButtons,
  CharDescription,
  CharName,
  CharNameContainer,
  CharSelect,
  CharThumbnail,
  ComicItem,
  ComicsList,
  ComicsTitle,
  Container,
  ErrorImage,
  Skeleton,
  SkeletonCircle,
  SkeletonHeader,
  SkeletonLine,
} from './styles'

import errorImg from '@/images/error.gif'
import { Button, Loader } from '~/components/shared'
import { StyledLink } from '~/components/widget/RandomChar/styles'
import { ButtonStyle, Route } from '~/constants'
import { concatThumbnailUrl, getIdFromUrl, replaceParams } from '~/functions'
import { actions, useAppDispatch, useAppSelector } from '~/store'

interface IProps {
  charId: number | null
}

const CharInfo: React.FC<IProps> = ({ charId }) => {
  const {
    name,
    thumbnail,
    urls,
    description,
    comics: { items },
    loading,
    error,
  } = useAppSelector((state) => state.character)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (charId) {
      dispatch(actions.character.loadCharacter(charId))
    }
  }, [charId])

  return (
    <Container>
      {!charId && (
        <>
          <CharSelect>Please select a character to see information</CharSelect>
          <Skeleton>
            <SkeletonHeader>
              <SkeletonCircle />
              <SkeletonLine $mini />
            </SkeletonHeader>
            <SkeletonLine />
            <SkeletonLine />
            <SkeletonLine />
          </Skeleton>
        </>
      )}
      {loading && <Loader size={50} />}
      {error && <ErrorImage src={errorImg} alt="error" />}
      {charId && (
        <>
          {!loading && !error && (
            <>
              <CharBasics>
                <Link to={replaceParams(Route.Character, { id: charId })}>
                  <CharThumbnail
                    src={concatThumbnailUrl(thumbnail)}
                    alt={name}
                    $thumbnail={!concatThumbnailUrl(thumbnail).includes('image_not_available')}
                  />
                </Link>
                <CharNameContainer>
                  <CharName>{name}</CharName>
                  <CharButtons>
                    {urls.map(({ type, url }, i) => {
                      if (type !== 'detail' && type !== 'wiki') return null

                      return (
                        <StyledLink key={i} href={url}>
                          {type === 'detail' ? (
                            <Button view={ButtonStyle.Red}>homepage</Button>
                          ) : (
                            <Button view={ButtonStyle.Gray}>{type}</Button>
                          )}
                        </StyledLink>
                      )
                    })}
                  </CharButtons>
                </CharNameContainer>
              </CharBasics>
              <CharDescription>{description}</CharDescription>
              <ComicsTitle>Comics:</ComicsTitle>
              <ComicsList>
                {items.map(({ name, resourceURI }) => (
                  <ComicItem key={name}>
                    <Link to={replaceParams(Route.Comic, { id: getIdFromUrl(resourceURI) })}>
                      {name}
                    </Link>
                  </ComicItem>
                ))}
              </ComicsList>
            </>
          )}
        </>
      )}
    </Container>
  )
}

export default React.memo(CharInfo)
