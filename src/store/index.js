import { configureStore } from "@reduxjs/toolkit";
import { listDataPartnersReducer } from "../store/slices/home/listDataPartners.slice";
import { TypicalSuccessfulReducer } from "./slices/home/typicalSuccessful.slice";

const rootReducer = {
  typicalSuccessful: TypicalSuccessfulReducer,
  listDataPartners: listDataPartnersReducer
}

export const store = configureStore({
  reducer: rootReducer,
  
})
