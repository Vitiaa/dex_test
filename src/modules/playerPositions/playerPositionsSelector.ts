import { TypedUseSelectorHook, useSelector } from "react-redux";
import {RootPlayerPositionsStateInterface} from "../../api/dto/PlayerDto/types";


export const usePlayerPositionsSelector: TypedUseSelectorHook<RootPlayerPositionsStateInterface> = useSelector;
