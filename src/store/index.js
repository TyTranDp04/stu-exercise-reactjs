import { configureStore } from "@reduxjs/toolkit";
import { TypicalSuccessfulReducer } from "./slices/home/typicalSuccessful.slice";
import { stSoftwareReducer } from "./slices/WhatWeDo/StSoftware.slice";
import { stSoftwareStoriesReducer } from "./slices/WhatWeDo/StSoftwareStories.slice";

const rootReducer = {
  typicalSuccessful: TypicalSuccessfulReducer,
  stSoftware: stSoftwareReducer,
  stSoftwareStories: stSoftwareStoriesReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
