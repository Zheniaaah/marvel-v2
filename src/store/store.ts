import { configureStore } from '@reduxjs/toolkit'
import { type TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import {
  charactersActions,
  characterSlice,
  charactersSlice,
  loadCharacter,
  loadCharacters,
  loadRandomCharacter,
  randomCharacterActions,
  randomCharacterSlice,
} from './features'

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
  reducer: {
    randomCharacter: randomCharacterSlice,
    characters: charactersSlice,
    character: characterSlice,
  },
})

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => typeof store.dispatch = useDispatch

export const actions = {
  randomCharacter: { ...randomCharacterActions, loadRandomCharacter },
  characters: { ...charactersActions, loadCharacters },
  character: { ...characterSlice, loadCharacter },
}
