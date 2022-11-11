import { createSlice } from "@reduxjs/toolkit";
import { getListDataStDigital } from "../../actions/WhatWeDo";

const initialState = {
  stDigitalState: {
    data: [],
    loading: false,
    error: null,
  }
};

const stDigitalSlice = createSlice({
  name: "stDigital",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataStDigital.pending, (state, action) => {
      state.stDigitalState = {
        ...state.stDigitalState,
        loading: true,
      }
    })
    builder.addCase(getListDataStDigital.fulfilled, (state, action) => {
      const data = action.payload;
      state.stDigitalState = {
        ...state.stDigitalState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataStDigital.rejected, (state, action) => {
      state.stDigitalState = {
        error: action.payload,
      }
    })
  },
});

export const stDigitalReducer = stDigitalSlice.reducer;





