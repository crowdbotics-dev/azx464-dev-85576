import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_znvfh_list = createAsyncThunk(
  "znvfhs/api_v1_znvfh_list",
  async payload => {
    const response = await apiService.api_v1_znvfh_list(payload)
    return response.data
  }
)
export const api_v1_znvfh_create = createAsyncThunk(
  "znvfhs/api_v1_znvfh_create",
  async payload => {
    const response = await apiService.api_v1_znvfh_create(payload)
    return response.data
  }
)
export const api_v1_znvfh_retrieve = createAsyncThunk(
  "znvfhs/api_v1_znvfh_retrieve",
  async payload => {
    const response = await apiService.api_v1_znvfh_retrieve(payload)
    return response.data
  }
)
export const api_v1_znvfh_update = createAsyncThunk(
  "znvfhs/api_v1_znvfh_update",
  async payload => {
    const response = await apiService.api_v1_znvfh_update(payload)
    return response.data
  }
)
export const api_v1_znvfh_partial_update = createAsyncThunk(
  "znvfhs/api_v1_znvfh_partial_update",
  async payload => {
    const response = await apiService.api_v1_znvfh_partial_update(payload)
    return response.data
  }
)
export const api_v1_znvfh_destroy = createAsyncThunk(
  "znvfhs/api_v1_znvfh_destroy",
  async payload => {
    const response = await apiService.api_v1_znvfh_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const znvfhsSlice = createSlice({
  name: "znvfhs",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_znvfh_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_znvfh_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_znvfh_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_znvfh_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_znvfh_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_znvfh_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_znvfh_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_znvfh_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_znvfh_list,
  api_v1_znvfh_create,
  api_v1_znvfh_retrieve,
  api_v1_znvfh_update,
  api_v1_znvfh_partial_update,
  api_v1_znvfh_destroy,
  slice: znvfhsSlice
}
