import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootPlayerPositionsStateInterface} from "./types";

export const usePlayerPositionsSelector: TypedUseSelectorHook<RootPlayerPositionsStateInterface> = useSelector;