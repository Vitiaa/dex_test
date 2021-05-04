import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootPlayerStateInterface} from "./types";

export const usePlayerSelector: TypedUseSelectorHook<RootPlayerStateInterface> = useSelector;