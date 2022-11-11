import { createSlice } from "@reduxjs/toolkit";
import { getListDataTypicalSuccessful } from "../../actions/Home";

const initialState = {
  typicalSuccessfulState: {
    data: [],
    loading: false,
    error: null,
  }
};

const TypicalSuccessfulSlice = createSlice({
  name: "typicalSuccessful",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataTypicalSuccessful.pending, (state, action) => {
      state.typicalSuccessfulState = {
        ...state.typicalSuccessfulState,
        loading: true,
      }
    })
    builder.addCase(getListDataTypicalSuccessful.fulfilled, (state, action) => {
      const data = action.payload;
      state.typicalSuccessfulState = {
        ...state.typicalSuccessfulState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataTypicalSuccessful.rejected, (state, action) => {
      state.typicalSuccessfulState = {
        error: action.payload,
      }
    })
  },
});

export const TypicalSuccessfulReducer = TypicalSuccessfulSlice.reducer;





