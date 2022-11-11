import { configureStore } from "@reduxjs/toolkit";
import { listDataPartnersReducer } from "../store/slices/home/listDataPartners.slice";
import { dataHomeSlideReducer } from "./slices/home/dataHomeSlide";
import { TypicalSuccessfulReducer } from "./slices/home/typicalSuccessful.slice";
import { weDevelopReducer } from "./slices/home/weDevelop.slice";
import { PortfolioReducer } from "./slices/Portfolio";
import { stDigitalReducer } from "./slices/WhatWeDo/StDigital.slice";
import { stDigitalMeetReducer } from "./slices/WhatWeDo/StDigitalMeet";
import { stSoftwareReducer } from "./slices/WhatWeDo/StSoftware.slice";
import { stSoftwareStoriesReducer } from "./slices/WhatWeDo/StSoftwareStories.slice";
import { dataTeamReducer } from "./slices/WhoWeAre/OurTeam.slice";

const rootReducer = {
  typicalSuccessful: TypicalSuccessfulReducer,
  listDataPartners: listDataPartnersReducer,
  dataHomeSlide: dataHomeSlideReducer,
  stSoftware: stSoftwareReducer,
  stSoftwareStories: stSoftwareStoriesReducer,
  dataTeam: dataTeamReducer,
  DataPortfolio: PortfolioReducer,
  stDigital: stDigitalReducer,
  stDigitalMeet: stDigitalMeetReducer,
  weDevelop: weDevelopReducer
} 

export const store = configureStore({
  reducer: rootReducer,
  
})
