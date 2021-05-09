import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootAuthStateInterface } from "../../api/dto/AuthDto/types";

export const useAuthSelector: TypedUseSelectorHook<RootAuthStateInterface> = useSelector;
