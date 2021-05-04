import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { teamSlice } from "./team";
import { RegistrationSlice } from "./register";
import { AuthSlice } from "./auth";
import { imgSlice } from "./image";
import { PlayerPositionsSlice } from "./playerPositions";
import { PlayerSlice } from "./player";

const reducer = {
  teams: teamSlice.reducer,
  userRegistration: RegistrationSlice.reducer,
  auth: AuthSlice.reducer,
  image: imgSlice.reducer,
  playerPositions: PlayerPositionsSlice.reducer,
  players: PlayerSlice.reducer,
};

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({
  reducer,
  middleware,
});

export type AppDispatchType = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
