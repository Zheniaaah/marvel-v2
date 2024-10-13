import React, { useCallback, useEffect, useId, useState } from 'react'
import { Link } from 'react-router-dom'

import {
  Container,
  ErrorMessage,
  FormLabel,
  SearchContainer,
  SearchForm,
  SearchInput,
  SuccessContainer,
  SuccessMessage,
} from './styles'

import { Button, Loader } from '~/components/shared'
import { ButtonStyle, LoaderStyle, Route } from '~/constants'
import { replaceParams } from '~/functions'
import { actions, useAppDispatch, useAppSelector } from '~/store'

const CharSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const { id, loading, error } = useAppSelector((state) => state.foundCharacter)
  const dispatch = useAppDispatch()
  const inputId: string = useId()

  useEffect(() => {
    dispatch(actions.foundCharacter.reset())
  }, [])

  const handleSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(actions.foundCharacter.searchCharacter(inputValue))
    },
    [inputValue],
  )

  return (
    <Container>
      <SearchForm onSubmit={handleSearch}>
        <FormLabel htmlFor={inputId}>Or find a character by name:</FormLabel>
        <SearchContainer>
          <SearchInput
            type="text"
            id={inputId}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button type="submit" view={ButtonStyle.Red} disabled={!inputValue}>
            {loading ? <Loader size={18} color={LoaderStyle.White} /> : 'find'}
          </Button>
        </SearchContainer>
        {error && (
          <ErrorMessage>The character was not found. Check the name and try again</ErrorMessage>
        )}
        {!!id && (
          <SuccessContainer>
            <SuccessMessage>There is! Visit {inputValue} page?</SuccessMessage>
            <Button view={ButtonStyle.Gray}>
              <Link to={replaceParams(Route.Character, { id })}>to page</Link>
            </Button>
          </SuccessContainer>
        )}
      </SearchForm>
    </Container>
  )
}

export default React.memo(CharSearch)
