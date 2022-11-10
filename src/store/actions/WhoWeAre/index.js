import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {DPWHOWEARE} from "../../../api/urls";

export const getListDataTeam = createAsyncThunk('DataTeam/getDataTeam', async () => {
  const response = await axios.get(DPWHOWEARE);
  return response.data;
});
