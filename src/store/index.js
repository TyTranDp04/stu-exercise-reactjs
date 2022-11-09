import { configureStore } from "@reduxjs/toolkit";
import { TypicalSuccessfulReducer } from "./slices/home/typicalSuccessful.slice";

const rootReducer = {
  typicalSuccessful: TypicalSuccessfulReducer,
}

export const store = configureStore({
  reducer: rootReducer,
})
