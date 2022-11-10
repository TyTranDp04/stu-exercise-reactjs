import { configureStore } from "@reduxjs/toolkit";
import { TypicalSuccessfulReducer } from "./slices/home/typicalSuccessful.slice";
import { dataTeamReducer } from "./slices/WhoWeAre/OurTeam.slice";

const rootReducer = {
  typicalSuccessful: TypicalSuccessfulReducer,
  dataTeam:dataTeamReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
