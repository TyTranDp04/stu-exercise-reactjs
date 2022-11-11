import { createSlice } from "@reduxjs/toolkit";
import { getListDataStIncubationProject } from "../../actions/WhatWeDo";

const initialState = {
  stIncubationProjectState: {
    data: [],
    loading: false,
    error: null,
  }
};

const stIncubationProjectSlice = createSlice({
  name: "stIncubationProject",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataStIncubationProject.pending, (state, action) => {
      state.stIncubationProjectState = {
        ...state.stIncubationProjectState,
        loading: true,
      }
    })
    builder.addCase(getListDataStIncubationProject.fulfilled, (state, action) => {
      const data = action.payload;
      state.stIncubationProjectState = {
        ...state.stIncubationProjectState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataStIncubationProject.rejected, (state, action) => {
      state.stIncubationProjectState = {
        error: action.payload,
      }
    })
  },
});

export const stIncubationProjectReducer = stIncubationProjectSlice.reducer;





