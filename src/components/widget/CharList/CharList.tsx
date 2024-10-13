import React, { useCallback, useEffect } from 'react'

import {
  CharContainer,
  CharItem,
  CharName,
  CharThumbnail,
  Container,
  List,
  ListContainer,
  StyledButton,
} from './styles'

import { Loader } from '~/components/shared'
import { CharInfo, CharSearch } from '~/components/widget'
import { ButtonStyle, LoaderStyle } from '~/constants'
import { concatThumbnailUrl } from '~/functions'
import { usePreloadData } from '~/hooks'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const CharList: React.FC = () => {
  const { offset, results, selectedChar, scrollPosition, loading, error } = useAppSelector(
    (state) => state.characters,
  )
  const dispatch = useAppDispatch()

  const [isPending, preloadedData] = usePreloadData({
    data: results,
    builder: ({ id, name, thumbnail }) => {
      return (
        <CharItem key={id} $selected={id === selectedChar} onClick={() => handleClick(id)}>
          <CharThumbnail
            src={concatThumbnailUrl(thumbnail)}
            alt={name}
            $thumbnail={!concatThumbnailUrl(thumbnail).includes('image_not_available')}
          />
          <CharName>{name}</CharName>
        </CharItem>
      )
    },
    scrollPosition: scrollPosition,
    setScrollPosition: actions.characters.updateScrollPosition,
    deps: [selectedChar],
  })

  useEffect(() => {
    if (!results.length) updateChars()
  }, [results])

  const updateChars = useCallback(() => {
    dispatch(actions.characters.loadCharacters())
  }, [])

  const handleClick = useCallback(
    (id: number | null) => {
      if (id === selectedChar) {
        dispatch(actions.characters.updateSelectedChar(null))
      } else {
        dispatch(actions.characters.updateSelectedChar(id))
      }
    },
    [selectedChar],
  )

  return (
    <Container>
      <ListContainer>
        <List>{!error && preloadedData}</List>
        {(loading || isPending) && offset === 0 && <Loader size={100} />}
        {(error || offset !== 0) && (
          <StyledButton
            view={ButtonStyle.Red}
            onClick={updateChars}
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
      </ListContainer>
      <CharContainer>
        <CharInfo charId={selectedChar} />
        <CharSearch />
      </CharContainer>
    </Container>
  )
}

export default React.memo(CharList)
