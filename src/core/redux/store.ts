import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import {reducer, middleware} from "./rootRedusers"


export const store = configureStore({
  reducer,
  middleware,
});

export type AppDispatchType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
