import {
  type ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import { api } from '~/services'
import type { ICharacterExtended } from '~/types'

interface IState extends ICharacterExtended {
  loading: boolean
  error: boolean
}

const initialState: IState = {
  id: null,
  name: '',
  thumbnail: null,
  description: '',
  urls: [],
  comics: {
    items: [],
  },
  loading: false,
  error: false,
}

export const characterSlice = createSlice({
  name: 'random-character',
  initialState,
  reducers: {
    reset: (): IState => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(loadCharacter.pending, (state: IState) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(
      loadCharacter.fulfilled,
      (state: IState, action: PayloadAction<ICharacterExtended[]>) => {
        action.payload.forEach(({ id, name, thumbnail, urls, comics: { items } }) => {
          state.id = id
          state.name = name
          state.thumbnail = thumbnail
          state.urls = urls
          state.comics.items = items.slice(0, 10)
        })
        state.loading = false
      },
    )
    builder.addCase(loadCharacter.rejected, (state: IState) => {
      state.loading = false
      state.error = true
    })
  },
})

export const loadCharacter = createAsyncThunk<ICharacterExtended[], number>(
  'character/load',
  async (id) => {
    const {
      data: { results },
    } = await api.get<{ results: ICharacterExtended[] }>(`characters/${id}`)

    return results
  },
)

export const characterActions = characterSlice.actions

export default characterSlice.reducer
