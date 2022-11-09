import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListDataTypicalSuccessful = createAsyncThunk('TypicalSuccessful/getTypicalSuccessful', async () => {
  const response = await axios.get();
  return response.data;
});
