import { createSlice } from "@reduxjs/toolkit";
import { getListDataSlide } from "../../actions/home";

const initialState = {
  dataHomeSlideState: {
    data: [],
    loading: false,
    error: null,
  }
};

const dataHomeSlideSlice = createSlice({
  name: "dataHomeSlide",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataSlide.pending, (state, action) => {
      state.dataHomeSlideState = {
        ...state.dataHomeSlideState,
        loading: true,
      }
    })
    builder.addCase(getListDataSlide.fulfilled, (state, action) => {
      const data = action.payload;
      state.dataHomeSlideState = {
        ...state.dataHomeSlideState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataSlide.rejected, (state, action) => {
      state.dataHomeSlideState = {
        error: action.payload,
      }
    })
  },
});

export const dataHomeSlideReducer = dataHomeSlideSlice.reducer;





