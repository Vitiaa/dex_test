import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootImageStateInterface} from "./types";

export const useImageSelector: TypedUseSelectorHook<RootImageStateInterface> = useSelector;