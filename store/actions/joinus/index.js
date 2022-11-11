import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DPJOINUS } from "../../../api/urls";

export const getListJoinUs = createAsyncThunk('DataTeam/getDataTeam', async () => {
    const response = await axios.get(DPJOINUS);
    return response.data;
  });