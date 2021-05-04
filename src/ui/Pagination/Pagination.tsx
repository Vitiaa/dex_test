import React from "react";
import ReactPaginate from "react-paginate";
import style from "./Pagination.module.css";
import { useAppDispatch } from "../../core/redux/store";
import {useQuery} from "../../hooks/hooks";
import {useHistory} from "react-router";
// import style from "src/components/Pagination/Pagination.module.css";

export const CustomPagination: React.FC<{
  size: number;
  sumPage: number;
  TypeCatalog: string;
}> = ({ sumPage, size, TypeCatalog }) => {
  const dispatch = useAppDispatch();
  const query = useQuery();
  const history = useHistory();
  function onPageChange(data: any) {
    let selected = data.selected;
    if (selected) {
      // query.delete("page");

      if (!query.has("page") && selected) {
        query.append("page", selected);
        history.push(`?${query.toString()}`)
      } else if (query.has("page") && selected) {
        query.set("page", selected);
        history.push(`?${query.toString()}`)
      } else {
        query.delete("page");
        history.push(`?${query.toString()}`)
      }
    }
  }



  return (
    <ReactPaginate
        activeClassName={style.activePage}
        activeLinkClassName = {style.activePage}
        pageLinkClassName={style.page}
        // initialPage={ 1}
      previousLabel={"<"}
      nextLabel={">"}
      breakLabel={"..."}
      breakClassName={"break-me"}
      pageCount={sumPage}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={onPageChange}
      containerClassName={style.pagination}
        previousLinkClassName={style.arrow}
        nextLinkClassName={style.arrow}

    />
  );
};
