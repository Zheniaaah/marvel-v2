import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import {
  characterActions,
  charactersActions,
  characterSlice,
  charactersSlice,
  comicActions,
  comicSlice,
  foundCharacterActions,
  foundCharacterSlice,
  loadCharacter,
  loadCharacters,
  loadComic,
  loadRandomCharacter,
  randomCharacterActions,
  randomCharacterSlice,
  searchCharacter,
} from './features'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    randomCharacter: randomCharacterSlice,
    characters: charactersSlice,
    character: characterSlice,
    foundCharacter: foundCharacterSlice,
    comic: comicSlice,
  },
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const actions = {
  randomCharacter: { ...randomCharacterActions, loadRandomCharacter },
  characters: { ...charactersActions, loadCharacters },
  character: { ...characterActions, loadCharacter },
  foundCharacter: { ...foundCharacterActions, searchCharacter },
  comic: { ...comicActions, loadComic },
}
