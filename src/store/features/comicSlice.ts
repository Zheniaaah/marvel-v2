import {
  type ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import { api } from '~/services'
import type { IFullComic } from '~/types'

interface IState extends IFullComic {
  loading: boolean
  error: boolean
}

const initialState: IState = {
  id: null,
  title: '',
  description: '',
  prices: [],
  thumbnail: {
    path: '',
    extension: '',
  },
  loading: false,
  error: false,
}

export const comicSlice = createSlice({
  name: 'comic',
  initialState,
  reducers: {
    reset: (): IState => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(loadComic.pending, (state: IState) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(loadComic.fulfilled, (state: IState, action: PayloadAction<IFullComic>) => {
      state.id = action.payload.id
      state.title = action.payload.title
      state.description = action.payload.description
      state.thumbnail = action.payload.thumbnail
      state.prices = action.payload.prices
      state.loading = false
    })
    builder.addCase(loadComic.rejected, (state: IState) => {
      state.loading = false
      state.error = true
    })
  },
})

export const loadComic = createAsyncThunk<IFullComic, number>('comic/load', async (id) => {
  const {
    data: { results },
  } = await api.get<{ results: IFullComic[] }>(`comics/${id}`)

  return results[0]
})

export const comicActions = comicSlice.actions

export default comicSlice.reducer
