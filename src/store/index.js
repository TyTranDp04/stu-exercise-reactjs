import { configureStore } from "@reduxjs/toolkit";
import { dataHomeSlideReducer } from "./slices/home/dataHomeSlide";
import { TypicalSuccessfulReducer } from "./slices/home/typicalSuccessful.slice";

const rootReducer = {
  typicalSuccessful: TypicalSuccessfulReducer,
  dataHomeSlide: dataHomeSlideReducer
}

export const store = configureStore({
  reducer: rootReducer,
})
