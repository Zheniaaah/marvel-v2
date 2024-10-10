import {
  type ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import { api } from '~/services'
import { type RootState } from '~/store'
import type { IRandomCharacter } from '~/types'

interface IState extends IRandomCharacter {
  loading: boolean
  error: boolean
}

const initialState: IState = {
  id: null,
  name: '',
  thumbnail: {
    path: '',
    extension: '',
  },
  description: '',
  urls: [],
  loading: false,
  error: false,
}

export const randomCharacterSlice = createSlice({
  name: 'random-character',
  initialState,
  reducers: {
    reset: (): IState => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(loadRandomCharacter.pending, (state: IState) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(
      loadRandomCharacter.fulfilled,
      (state: IState, action: PayloadAction<IRandomCharacter[]>) => {
        action.payload.forEach(({ id, name, thumbnail, urls }) => {
          state.id = id
          state.name = name
          state.thumbnail = thumbnail
          state.urls = urls
        })
        state.loading = false
      },
    )
    builder.addCase(loadRandomCharacter.rejected, (state: IState) => {
      state.loading = false
      state.error = true
    })
  },
})

export const loadRandomCharacter = createAsyncThunk<IRandomCharacter[], void, { state: RootState }>(
  'random-character/load',
  async () => {
    const randomId = Math.floor(Math.random() * (1011400 - 1011000) + 1011000)

    const {
      data: { results },
    } = await api.get<{ results: IRandomCharacter[] }>(`characters/${randomId}`)

    return results
  },
)

export const randomCharacterActions = randomCharacterSlice.actions

export default randomCharacterSlice.reducer
