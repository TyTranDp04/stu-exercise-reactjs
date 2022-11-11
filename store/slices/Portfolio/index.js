import { createSlice } from "@reduxjs/toolkit";
import { getListDataPortfolio } from "../../actions/Portfolio";

const initialState = {
  PortfolioState: {
    data: [],
    loading: false,
    error: null,
  }
};

const PortfolioSlice = createSlice({
  name: "DataPortfolio",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataPortfolio.pending, (state, action) => {
      state.PortfolioState = {
        ...state.PortfolioState,
        loading: true,
      }
    })
    builder.addCase(getListDataPortfolio.fulfilled, (state, action) => {
      const data = action.payload;
      state.PortfolioState = {
        ...state.PortfolioState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataPortfolio.rejected, (state, action) => {
      state.PortfolioState = {
        error: action.payload,
      }
    })
  },
});

export const PortfolioReducer = PortfolioSlice.reducer;