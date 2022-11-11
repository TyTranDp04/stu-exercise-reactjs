import { createSlice } from "@reduxjs/toolkit";
import { getListDataPartners } from "../../actions/home/index";



const initialState = {
  listDataPartnersState: {
    data: [],
    loading: false,
    error: null,
  }
};

const listDataPartnersSlice = createSlice({
  name: "listDataPartners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDataPartners.pending, (state, action) => {
      state.listDataPartnersState = {
        ...state.listDataPartnersState,
        loading: true,
      }
    })
    builder.addCase(getListDataPartners.fulfilled, (state, action) => {
      const data = action.payload;
      state.listDataPartnersState = {
        ...state.listDataPartnersState,
        loading: false,
        data,
      }
    })
    builder.addCase(getListDataPartners.rejected, (state, action) => {
      state.listDataPartnersState = {
        error: action.payload,
      }
    })
  },
});

export const listDataPartnersReducer = listDataPartnersSlice.reducer;





