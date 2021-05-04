import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootAuthStateInterface } from "./types";

export const useAuthSelector: TypedUseSelectorHook<RootAuthStateInterface> = useSelector;
