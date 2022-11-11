import { createSlice } from "@reduxjs/toolkit";
import { getListDataWeDevelop } from "../../actions/home";

const initialState = {
  weDevelopState: {
    data: [],
    loading: false,
    error: null,
  }
};

const weDevelopSlice = createSlice({
  name: "weDevelop",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataWeDevelop.pending, (state, action) => {
      state.weDevelopState = {
        ...state.weDevelopState,
        loading: true,
      }
    })
    builder.addCase(getListDataWeDevelop.fulfilled, (state, action) => {
      const data = action.payload;
      state.weDevelopState = {
        ...state.weDevelopState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataWeDevelop.rejected, (state, action) => {
      state.weDevelopState = {
        error: action.payload,
      }
    })
  },
});

export const weDevelopReducer = weDevelopSlice.reducer;





