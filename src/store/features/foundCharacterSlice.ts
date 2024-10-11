import {
  type ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from '@reduxjs/toolkit'

import { api } from '~/services'

interface IState {
  id: number | null
  loading: boolean
  error: boolean
}

const initialState: IState = {
  id: null,
  loading: false,
  error: false,
}

export const foundCharacterSlice = createSlice({
  name: 'found-character',
  initialState,
  reducers: {
    reset: (): IState => initialState,
  },
  extraReducers: (builder: ActionReducerMapBuilder<IState>) => {
    builder.addCase(searchCharacter.pending, (state: IState) => {
      state.loading = true
      state.error = false
    })
    builder.addCase(
      searchCharacter.fulfilled,
      (state: IState, action: PayloadAction<{ id: number }>) => {
        state.id = action.payload.id
        state.loading = false
      },
    )
    builder.addCase(searchCharacter.rejected, (state: IState) => {
      state.loading = false
      state.error = true
    })
  },
})

export const searchCharacter = createAsyncThunk<{ id: number }, string>(
  'found-character/load',
  async (name) => {
    const {
      data: { results },
    } = await api.get<{ results: { id: number }[] }>('characters', {
      params: { name },
    })

    return results[0]
  },
)

export const foundCharacterActions = foundCharacterSlice.actions

export default foundCharacterSlice.reducer
