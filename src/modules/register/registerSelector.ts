import { TypedUseSelectorHook, useSelector } from "react-redux";
import {RootRegistrationStateInterface} from "../../api/dto/AuthDto/types";


export const useRegistrationSelector: TypedUseSelectorHook<RootRegistrationStateInterface> = useSelector;
