import { configureStore } from "@reduxjs/toolkit";
import { TypicalSuccessfulReducer } from "./slices/home/typicalSuccessful.slice";
import { dataJoinUsReducer } from "./slices/JoinUs";
import { dataTeamReducer } from "./slices/WhoWeAre/OurTeam.slice";

const rootReducer = {
  typicalSuccessful: TypicalSuccessfulReducer,
  dataTeam:dataTeamReducer,
  dataJoinUs:dataJoinUsReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
