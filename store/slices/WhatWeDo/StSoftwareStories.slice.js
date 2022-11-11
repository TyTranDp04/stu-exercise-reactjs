import { createSlice } from "@reduxjs/toolkit";
import { getListDataStSoftwareStories } from "../../actions/WhatWeDo";

const initialState = {
  stSoftwareStoriesState: {
    data: [],
    loading: false,
    error: null,
  }
};

const stSoftwareStoriesSlice = createSlice({
  name: "stSoftwareStories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataStSoftwareStories.pending, (state, action) => {
      state.stSoftwareStoriesState = {
        ...state.stSoftwareStoriesState,
        loading: true,
      }
    })
    builder.addCase(getListDataStSoftwareStories.fulfilled, (state, action) => {
      const data = action.payload;
      state.stSoftwareStoriesState = {
        ...state.stSoftwareStoriesState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataStSoftwareStories.rejected, (state, action) => {
      state.stSoftwareStoriesState = {
        error: action.payload,
      }
    })
  },
});

export const stSoftwareStoriesReducer = stSoftwareStoriesSlice.reducer;





