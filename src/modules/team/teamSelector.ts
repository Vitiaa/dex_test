import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootTeamStateInterface } from "../../api/dto/TeamDto/types";

export const useTeamSelector: TypedUseSelectorHook<RootTeamStateInterface> = useSelector;
