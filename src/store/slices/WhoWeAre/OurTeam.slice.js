import { createSlice } from "@reduxjs/toolkit";
import { getListDataTeam } from "../../actions/WhoWeAre";

const initialState = {
  dataTeamState: {
    data: [],
    loading: false,
    error: null,
  }
};

const dataTeamSlice = createSlice({
  name: "dataTeam",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataTeam.pending, (state, action) => {
      state.dataTeamState = {
        ...state.dataTeamState,
        loading: true,
      }
    })
    builder.addCase(getListDataTeam.fulfilled, (state, action) => {
      const data = action.payload;
      state.dataTeamState = {
        ...state.dataTeamState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataTeam.rejected, (state, action) => {
      state.dataTeamState = {
        error: action.payload,
      }
    })
  },
});

export const dataTeamReducer = dataTeamSlice.reducer;





