import { createSlice } from "@reduxjs/toolkit";
import { getListJoinUs } from "../../actions/joinus";

const initialState = {
    dataJoinUsState: {
      data: [],
      loading: false,
      error: null,
    }
  };
  
  const dataJoinUsSlice = createSlice({
    name: "dataJoinUs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getListJoinUs.pending, (state, action) => {
        state.dataTeamState = {
          ...state.dataTeamState,
          loading: true,
        }
      })
      builder.addCase(getListJoinUs.fulfilled, (state, action) => {
        const data = action.payload;
        state.dataTeamState = {
          ...state.dataTeamState,
          loading: false,
          data,
        }
      })
      builder.addCase(getListJoinUs.rejected, (state, action) => {
        state.dataTeamState = {
          error: action.payload,
        }
      })
    },
  });
  
  export const dataJoinUsReducer = dataJoinUsSlice.reducer;
  
  
  
  
  
  