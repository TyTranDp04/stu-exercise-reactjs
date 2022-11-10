import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getListDataTypicalSuccessful = createAsyncThunk('TypicalSuccessful/getTypicalSuccessful', async () => {
  const response = await axios.get();
  return response.data;
});

export const getListDataSlide = createAsyncThunk('dataSlide/getDataSlide', async () => {
  const response = await axios.get('https://636c99d3ab4814f2b268c658.mockapi.io/home-slide/home-slide');
  return response.data;
});





