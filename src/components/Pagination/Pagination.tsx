import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.css";
import { getTeams } from "../../store/team/asyncAction";
import { useAppDispatch } from "../../store";
import { getPlayers } from "../../store/player/asyncAction";

export const CustomPagination: React.FC<{
  size: number;
  sumPage: number;
  TypeCatalog: string;
}> = ({ sumPage, size, TypeCatalog }) => {
  const dispatch = useAppDispatch();
  function onPageChange(data: any) {
    let selected = data.selected + 1;
    let name = "";
    // console.log(TypeCatalog);
    const pageNum = selected;
    if (TypeCatalog == "teams") {
      dispatch(getTeams({ pageNum, size, name }));
    }
    if (TypeCatalog == "players") {
      dispatch(getPlayers({ pageNum, size, name }));
    }
  }

  return (
    <ReactPaginate
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={sumPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={style.pagination}
      activeClassName={style.active}
    />
  );
};
