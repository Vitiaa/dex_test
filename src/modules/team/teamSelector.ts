import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootTeamStateInterface} from "./types";

export const useTeamSelector: TypedUseSelectorHook<RootTeamStateInterface> = useSelector;