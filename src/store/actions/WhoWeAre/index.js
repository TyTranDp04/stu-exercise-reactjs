import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { DP_Who_We_Are_MeetOurTeam } from "../../../api/urls";

export const getListDataTeam = createAsyncThunk('DataTeam/getDataTeam', async () => {
  const response = await axios.get(DP_Who_We_Are_MeetOurTeam);
  return response.data;
});
