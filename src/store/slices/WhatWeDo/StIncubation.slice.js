import { createSlice } from "@reduxjs/toolkit";
import { getListDataStIncubation } from "../../actions/WhatWeDo";

const initialState = {
  stIncubationState: {
    data: [],
    loading: false,
    error: null,
  }
};

const stIncubationSlice = createSlice({
  name: "stIncubation",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataStIncubation.pending, (state, action) => {
      state.stIncubationState = {
        ...state.stIncubationState,
        loading: true,
      }
    })
    builder.addCase(getListDataStIncubation.fulfilled, (state, action) => {
      const data = action.payload;
      state.stIncubationState = {
        ...state.stIncubationState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataStIncubation.rejected, (state, action) => {
      state.stIncubationState = {
        error: action.payload,
      }
    })
  },
});

export const stIncubationReducer = stIncubationSlice.reducer;





