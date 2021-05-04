import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootRegistrationStateInterface } from "./types";

export const useRegistrationSelector: TypedUseSelectorHook<RootRegistrationStateInterface> = useSelector;
