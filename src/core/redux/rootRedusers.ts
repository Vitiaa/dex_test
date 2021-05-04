import { teamSlice } from "../../modules/team/teamSlice";
import { RegistrationSlice } from "../../modules/register/registerSlice";
import { AuthSlice } from "../../modules/auth/authSlice";
import { imgSlice } from "../../modules/image/imageSlice";
import { PlayerPositionsSlice } from "../../modules/playerPositions/playerPositionsSlice";
import { PlayerSlice } from "../../modules/player/playerSlice";
import { getDefaultMiddleware } from "@reduxjs/toolkit";

export const reducer = {
  teams: teamSlice.reducer,
  userRegistration: RegistrationSlice.reducer,
  auth: AuthSlice.reducer,
  image: imgSlice.reducer,
  playerPositions: PlayerPositionsSlice.reducer,
  players: PlayerSlice.reducer,
};

export const middleware = [...getDefaultMiddleware()];
