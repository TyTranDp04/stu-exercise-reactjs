import { configureStore } from "@reduxjs/toolkit";
import { listDataPartnersReducer } from "../store/slices/home/listDataPartners.slice";
import { TypicalSuccessfulReducer } from "./slices/home/typicalSuccessful.slice";
import { stDigitalReducer } from "./slices/WhatWeDo/StDigital.slice";
import { stDigitalMeetReducer } from "./slices/WhatWeDo/StDigitalMeet";
import { stSoftwareReducer } from "./slices/WhatWeDo/StSoftware.slice";
import { stSoftwareStoriesReducer } from "./slices/WhatWeDo/StSoftwareStories.slice";
import { dataTeamReducer } from "./slices/WhoWeAre/OurTeam.slice";

const rootReducer = {
  typicalSuccessful: TypicalSuccessfulReducer,
  listDataPartners: listDataPartnersReducer,
  stSoftware: stSoftwareReducer,
  stSoftwareStories: stSoftwareStoriesReducer,
  dataTeam: dataTeamReducer,
  stDigital: stDigitalReducer,
  stDigitalMeet: stDigitalMeetReducer
}

export const store = configureStore({
  reducer: rootReducer,
  
})
