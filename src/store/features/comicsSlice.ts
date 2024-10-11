import {
  type ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import { api } from '~/services'
import type { RootState } from '~/store'
import type { IFullComic } from '~/types'

interface IComics {
  offset: number
  total: number
  results: IFullComic[]
}

interface IState extends IComics {
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

export const comicsSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    reset: (): IState => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(loadComics.pending, (state: IState) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(loadComics.fulfilled, (state: IState, action: PayloadAction<IComics>) => {
      state.offset += action.payload.results.length
      state.total = action.payload.total
      state.results = [...state.results, ...action.payload.results]
      state.loading = false
    })
    builder.addCase(loadComics.rejected, (state: IState) => {
      state.loading = false
      state.error = true
    })
  },
})

export const loadComics = createAsyncThunk<IComics, void, { state: RootState }>(
  'comics/load',
  async (_, { getState }) => {
    const prevOffset = getState().characters.offset

    const { data } = await api.get<IComics>('comics', {
      params: { limit: 16, offset: prevOffset },
    })

    return data
  },
)

export const comicsActions = comicsSlice.actions

export default comicsSlice.reducer
