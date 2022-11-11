import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ST_PORTFOLIO_URL } from "../../../api/urls";

export const getListDataPortfolio = createAsyncThunk('DataPortfolio/getDataPortfolio', async () => {
  const response = await axios.get(ST_PORTFOLIO_URL);
  return response.data;
});
