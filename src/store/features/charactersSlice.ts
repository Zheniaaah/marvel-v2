import {
  type ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import { api } from '~/services'
import { type RootState } from '~/store'
import type { ICharacter } from '~/types'

interface ICharacters {
  offset: number
  total: number
  results: ICharacter[]
}

interface IState extends ICharacters {
  loading: boolean
  error: boolean
}

const initialState: IState = {
  offset: 0,
  total: 0,
  results: [],
  loading: false,
  error: false,
}

export const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    reset: (): IState => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(loadCharacters.pending, (state: IState) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(
      loadCharacters.fulfilled,
      (state: IState, action: PayloadAction<ICharacters>) => {
        state.offset = action.payload.results.length
        state.total = action.payload.total
        state.results = action.payload.results
        state.loading = false
      },
    )
    builder.addCase(loadCharacters.rejected, (state: IState) => {
      state.loading = false
      state.error = true
    })
  },
})

export const loadCharacters = createAsyncThunk<ICharacters, void, { state: RootState }>(
  'characters/load',
  async (_, { getState }) => {
    const prevOffset = getState().characters.offset

    const { data } = await api.get<ICharacters>('characters', {
      params: { limit: 9, offset: prevOffset },
    })

    return data
  },
)

export const charactersActions = charactersSlice.actions

export default charactersSlice.reducer
