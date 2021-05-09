import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootPlayerStateInterface } from "../../api/dto/PlayerDto/types";

export const usePlayerSelector: TypedUseSelectorHook<RootPlayerStateInterface> = useSelector;
