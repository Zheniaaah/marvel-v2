import React, { useCallback, useEffect, useState } from 'react'

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
import { actions, useAppDispatch, useAppSelector } from '~/store'

const CharList: React.FC = () => {
  const [selectedChar, setSelectedChar] = useState<number | null>(null)
  const { offset, results, loading, error } = useAppSelector((state) => state.characters)
  const dispatch = useAppDispatch()

  const updateChars = useCallback(() => {
    dispatch(actions.characters.loadCharacters())
  }, [dispatch])

  useEffect(() => {
    if (!results.length) updateChars()
  }, [results, updateChars])

  return (
    <Container>
      <ListContainer>
        <List>
          {!error &&
            results.map(({ id, name, thumbnail }) => (
              <CharItem
                key={id}
                $selected={id === selectedChar}
                onClick={() => setSelectedChar(id)}
              >
                <CharThumbnail
                  src={concatThumbnailUrl(thumbnail)}
                  alt={name}
                  $thumbnail={!concatThumbnailUrl(thumbnail).includes('image_not_available')}
                />
                <CharName>{name}</CharName>
              </CharItem>
            ))}
        </List>
        {loading && offset === 0 && <Loader size={100} />}
        {(error || offset !== 0) && (
          <StyledButton view={ButtonStyle.Red} onClick={updateChars} disabled={loading} width={170}>
            {loading ? (
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
