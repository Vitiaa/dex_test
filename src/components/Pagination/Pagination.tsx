import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.css";
import { getTeams2 } from "../../store/team/asyncAction";
import { useAppDispatch } from "../../store";
import { getPlayers2 } from "../../store/player/asyncAction";

export const CustomPagination: React.FC<{
  size: number;
  sumPage: number;
  TypeCatalog: string;
}> = ({ sumPage, size, TypeCatalog }) => {
  const dispatch = useAppDispatch();
  function onPageChange(data: any) {
    let selected = data.selected + 1;
    let name = "";
    console.log(TypeCatalog);
    const pageNum = selected;
    if (TypeCatalog == "teams") {
      dispatch(getTeams2({ pageNum, size, name }));
    }
    if (TypeCatalog == "players") {
      dispatch(getPlayers2({ pageNum, size, name }));
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
