import React, { useEffect } from "react";
import styled from "styled-components";
import { useQuery } from "../../hooks/hooks";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import search_rounded from "../../assets/Icons/search_rounded.svg";

const SearchInput: React.FC = () => {
  const { register, handleSubmit, watch } = useForm<{
    searchText: string;
  }>();

  let searchText = watch("searchText") || "";

  const query = useQuery();
  const history = useHistory();

  const searchReuest = watch("searchText");
  const imageSubmit = () => {
    const searchText = searchReuest;
    query.delete("page");

    if (!query.has("searchText") && searchText) {
      query.append("searchText", searchText);
      history.push(`?${query.toString()}`);
    } else if (query.has("searchText") && searchText) {
      query.set("searchText", searchText);
      history.push(`?${query.toString()}`);
    } else {
      query.delete("searchText");
      history.push(`?${query.toString()}`);
    }
  };
  function onPushSearchText({ searchText }: { searchText: string }) {
    query.delete("page");

    if (!query.has("searchText") && searchText) {
      query.append("searchText", searchText);
      history.push(`?${query.toString()}`);
    } else if (query.has("searchText") && searchText) {
      query.set("searchText", searchText);
      history.push(`?${query.toString()}`);
    } else {
      query.delete("searchText");
      history.push(`?${query.toString()}`);
    }
  }
  return (
    <form onSubmit={handleSubmit(onPushSearchText)}>
      {" "}
      <InputWr>
        <input
          type="text"
          defaultValue={query.get("searchText") || ""}
          {...register("searchText")}
        />
        <img onClick={imageSubmit} src={search_rounded} alt="" />
      </InputWr>
    </form>
  );
};

export default SearchInput;

const InputWr = styled.div`
  background: #f6f6f6;
  border-radius: 4px;
  display: flex;
  border-radius: 4px;
  border: none;
  box-shadow: 0px 0px 5px #d9d9d9;
  margin-bottom: 10px;

  :hover {
    background: #d1d1d1;
  }
  :focus {
    box-shadow: 0px 0px 5px #d9d9d9;
  }
  img {
    background: white;
    cursor: pointer;
  }

  input {
    text-align: start;
    min-width: 327px;
    width: 100%;
    display: block;
    box-sizing: border-box;
    outline: none;
    background: #fff;
    border: none;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    padding: 8px 12px 8px 8px;

    :hover {
      background: #d1d1d1;
    }
    //:focus  {
    //  box-shadow: 0px 0px 5px #d9d9d9;
    //}
    :hover ~ img {
      background: #fff;
    }
    :focus + InputWithIcom {
      //box-shadow: 0px 0px 5px #d9d9d9;
    }
  }
  img {
    padding: 8px 12px 8px 8px;
  }
`;
