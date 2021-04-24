import React, { useEffect } from "react";
import styled from "styled-components";
import { getTeams2 } from "../../../store/team/asyncAction";
import { useAppDispatch } from "../../../store";
import { useForm } from "react-hook-form";
import { addPlayer, getPlayers2 } from "../../../store/player/asyncAction";
import MultiSelect from "../MultiSelect/MultiSelect";

const SearchInput: React.FC<{
  size: number;
  TypeCatalog: string;
}> = ({ size, TypeCatalog }) => {
  const dispatch = useAppDispatch();
  const pageNum = 1;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{ pageNum: number; size: number; name: string; multiTeam:any }>();

  let name = watch("name") || "";
  let TeamIds: any = watch("multiTeam");
  console.log(TeamIds);
  useEffect(() => {
    if (name) {
      if (TypeCatalog == "teams") {
        dispatch(getTeams2({ pageNum, size, name }));
      } else if (TypeCatalog == "players") {
        dispatch(getPlayers2({ pageNum, size, name }));
      }
    }
  }, [name]);

  const onSubmit = (data: any) => {
    // if (name){
    //     if(TypeCatalog =="teams"){
    //         dispatch(getTeams2({pageNum,size,name}));
    //     }
    //     else if (TypeCatalog == "players"){dispatch(getPlayers2({pageNum,size,name}));}
    // }
    console.log("        console.log('');\n");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {" "}
      <InputWr>
        <input type="text" {...register("name")} />
      </InputWr>
      {TypeCatalog == "players" ? (
        <MultiSelect {...register} name={"multiTeam"} />
      ) : null}
    </form>
  );
};

export default SearchInput;

const InputWr = styled.div`
  display: flex;
  input {
    min-width: 327px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    outline: none;
    background: #f6f6f6;
    border-radius: 4px;
    margin-bottom: 6px;
    border: none;
    font-weight: 500;
    font-size: 14px;
    padding: 8px 12px 8px 8px;
    line-height: 24px;
    :hover {
      background: #d1d1d1;
    }
    :focus {
      box-shadow: 0px 0px 5px #d9d9d9;
    }
  }
`;
