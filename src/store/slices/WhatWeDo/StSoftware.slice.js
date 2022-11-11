import { createSlice } from "@reduxjs/toolkit";
import { getListDataStSoftware } from "../../actions/WhatWeDo";

const initialState = {
  stSoftwareState: {
    data: [],
    loading: false,
    error: null,
  }
};

const stSoftwareSlice = createSlice({
  name: "stSoftware",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataStSoftware.pending, (state, action) => {
      state.stSoftwareState = {
        ...state.stSoftwareState,
        loading: true,
      }
    })
    builder.addCase(getListDataStSoftware.fulfilled, (state, action) => {
      const data = action.payload;
      state.stSoftwareState = {
        ...state.stSoftwareState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataStSoftware.rejected, (state, action) => {
      state.stSoftwareState = {
        error: action.payload,
      }
    })
  },
});

export const stSoftwareReducer = stSoftwareSlice.reducer;





