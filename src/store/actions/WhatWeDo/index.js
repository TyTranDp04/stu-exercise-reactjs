import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ST_DIGITAL_MEET_URL, ST_DIGITAL_URL, ST_INCUBATION_PROJECT_URL, ST_INCUBATION_URL, ST_SOFTWARE_STORIES_URL, ST_SOFTWARE_URL } from "../../../api/urls";

export const getListDataStSoftware = createAsyncThunk('StSoftware/getStSoftware', async () => {
  const response = await axios.get(ST_SOFTWARE_URL);
  return response.data;
});

export const getListDataStSoftwareStories = createAsyncThunk('StSoftwareStories/getStSoftwareStories', async () => {
  const response = await axios.get(ST_SOFTWARE_STORIES_URL);
  return response.data;
});

export const getListDataStDigital = createAsyncThunk('StDigital/getStDigital', async () => {
  const response = await axios.get(ST_DIGITAL_URL);
  return response.data;
});

export const getListDataStDigitalMeet = createAsyncThunk('StDigitalMeet/getStDigitalMeet', async () => {
  const response = await axios.get(ST_DIGITAL_MEET_URL);
  return response.data;
});

export const getListDataStIncubation = createAsyncThunk('StIncubation/getStIncubation', async () => {
  const response = await axios.get(ST_INCUBATION_URL);
  return response.data;
});

export const getListDataStIncubationProject = createAsyncThunk('StIncubationProject/getStIncubationProject', async () => {
  const response = await axios.get(ST_INCUBATION_PROJECT_URL);
  return response.data;
});