import React, { useCallback, useEffect } from 'react'
import { Link } from 'react-router-dom'

import {
  Block,
  BlockButtons,
  BlockContainer,
  BlockDescription,
  BlockInfo,
  BlockName,
  BlockThumbnail,
  Container,
  ErrorImage,
  Static,
  StaticDecoration,
  StaticTitle,
  StyledLink,
} from './styles'

import errorImg from '@/images/error.gif'
import mjolnirImg from '@/images/mjolnir.png'
import { Button, Loader } from '~/components/shared'
import { ButtonStyle, Route } from '~/constants'
import { concatThumbnailUrl, replaceParams } from '~/functions'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const RandomChar: React.FC = () => {
  const { id, name, thumbnail, description, urls, loading, error } = useAppSelector(
    (state) => state.randomCharacter,
  )
  const dispatch = useAppDispatch()

  const updateChar = useCallback(() => {
    dispatch(actions.randomCharacter.loadRandomCharacter())
  }, [dispatch])

  useEffect(() => {
    updateChar()
  }, [updateChar])

  return (
    <Container>
      <BlockContainer>
        {loading && <Loader size={80} />}
        {error && <ErrorImage src={errorImg} alt="error" />}
        {!loading && !error && (
          <Block>
            <Link to={replaceParams(Route.Character, { id: id! })}>
              <BlockThumbnail
                src={concatThumbnailUrl(thumbnail)}
                alt={name}
                $thumbnail={!concatThumbnailUrl(thumbnail).includes('image_not_available')}
              />
            </Link>
            <BlockInfo>
              <BlockName>{name}</BlockName>
              <BlockDescription>
                {description ? description : 'There is no description for this character'}
              </BlockDescription>
              <BlockButtons>
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
              </BlockButtons>
            </BlockInfo>
          </Block>
        )}
      </BlockContainer>
      <Static>
        <StaticTitle>
          Random character for today!
          <br />
          Do you want to get to know him better?
        </StaticTitle>
        <StaticTitle>Or choose another one</StaticTitle>
        <StaticDecoration src={mjolnirImg} alt="mjolnir" />
        <Button view={ButtonStyle.Red} onClick={updateChar} disabled={loading}>
          try it out
        </Button>
      </Static>
    </Container>
  )
}

export default React.memo(RandomChar)
