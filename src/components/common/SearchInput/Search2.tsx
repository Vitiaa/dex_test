import React, { useEffect } from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../../store";
import { useQuery } from "../../../hooks/hooks";
import { useForm } from "react-hook-form";
import {useHistory} from "react-router";
import { getTeams } from "../../../store/team/asyncAction";
import { getPlayers } from "../../../store/player/asyncAction";

const SearchInput2: React.FC = () => {
  const dispatch = useAppDispatch();
  const pageNum = 1;
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<{
    searchText: string;
  }>();

  let searchText = watch("searchText") || "";

  const query = useQuery();
  const history = useHistory();
  useEffect(() => {
    if (searchText) {
      query.delete("page");

      if (!query.has("searchText") && searchText) {
        query.append("searchText", searchText);
        console.log(query);
        history.push(`?${query.toString()}`)
      } else if (query.has("searchText") && searchText) {
        query.set("searchText", searchText);
        console.log(query);
        history.push(`?${query.toString()}`)
      } else {
        query.delete("searchText");
        history.push(`?${query.toString()}`)
      }
    }
  }, [searchText]);

  function onPushSearchText({ searchText }: { searchText: string }) {
    query.delete("page");

    if (!query.has("searchText") && searchText) {
      query.append("searchText", searchText);
      // history.push(`?${query.toString()}`)
    } else if (query.has("searchText") && searchText) {
      query.set("searchText", searchText);
      // history.push(`?${query.toString()}`)
    } else {
      query.delete("searchText");
      // history.push(`?${query.toString()}`)
    }
  }
  return (
    <form onSubmit={handleSubmit(onPushSearchText)}>
      {" "}
      <InputWr>
        <input type="text" {...register("searchText")} />
        <button type={"submit"}> Поиск</button>
      </InputWr>
    </form>
  );
};

export default SearchInput2;

const InputWr = styled.div`
  display: flex;
  input {
    min-width: 327px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    outline: none;
    background: #ffffff;
    border-radius: 4px;
    margin-bottom: 6px;
    margin-right: 24px;
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
