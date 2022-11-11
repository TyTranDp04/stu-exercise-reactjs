import { createSlice } from "@reduxjs/toolkit";
import { getListDataStDigitalMeet } from "../../actions/WhatWeDo";

const initialState = {
  stDigitalMeetState: {
    data: [],
    loading: false,
    error: null,
  }
};

const stDigitalMeetSlice = createSlice({
  name: "stDigitalMeet",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataStDigitalMeet.pending, (state, action) => {
      state.stDigitalMeetState = {
        ...state.stDigitalMeetState,
        loading: true,
      }
    })
    builder.addCase(getListDataStDigitalMeet.fulfilled, (state, action) => {
      const data = action.payload;
      state.stDigitalMeetState = {
        ...state.stDigitalMeetState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataStDigitalMeet.rejected, (state, action) => {
      state.stDigitalMeetState = {
        error: action.payload,
      }
    })
  },
});

export const stDigitalMeetReducer = stDigitalMeetSlice.reducer;





