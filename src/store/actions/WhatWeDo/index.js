import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ST_SOFTWARE_STORIES_URL, ST_SOFTWARE_URL } from "../../../api/urls";

export const getListDataStSoftware = createAsyncThunk('StSoftware/getStSoftware', async () => {
  const response = await axios.get(ST_SOFTWARE_URL);
  return response.data;
});

export const getListDataStSoftwareStories = createAsyncThunk('StSoftwareStories/getStSoftwareStories', async () => {
  const response = await axios.get(ST_SOFTWARE_STORIES_URL);
  return response.data;
});