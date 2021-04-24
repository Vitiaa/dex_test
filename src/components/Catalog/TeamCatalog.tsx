import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { deviceMax } from "../Primitives";
import AddButton from "../UI/Button/AddButton";
import SearchInput from "../UI/SearchInput/SearchInput";
import CatalogItem from "../CatalogItem/CatalogItem";
import { useAppDispatch } from "../../store";
import { AdminLayout } from "../Layout";
import { getTeams, getTeams2 } from "../../store/team/asyncAction";
import { Link, NavLink } from "react-router-dom";
import { useTeamSelector } from "../../store/team";
import { InitialStateTeamsInterface } from "../../store/team/types";
import { CustomPagination } from "../Pagination/Pagination";
import ReactPaginate from "react-paginate";

const TeamCatalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { page, size, items, count } = useTeamSelector((state) => state.teams);
  let unCount = count % 2;
  // console.log(unCount);

  const sumPage = Math.floor(count / 6) + 1;
  // console.log(sumPage);
  const pageNum = page;
  let name = "";
  // console.log(size);

  useEffect(() => {
    console.log("localStorage.token => ", localStorage.token);
    dispatch(getTeams());
  }, [page]);
  // useEffect(() => {console.log(items)},[items])

  const teamsList = useMemo(
    () =>
      items.length ? (
        items.map((item: any) => <CatalogItem key={item.id} item={item} />)
      ) : (
        <p>lol </p>
      ),
    [items]
  );

  return (
    <AdminLayout hasHeader={true}>
      <CatalogWrapper>
        <CatalogHeader>
          <>
            <SearchInput TypeCatalog={"teams"} size={size} />
          </>
          <Link to={"/AddTeam"}>
            <AddButton />
          </Link>
        </CatalogHeader>

        <ItemList>{teamsList}</ItemList>
      </CatalogWrapper>
      <CustomPagination TypeCatalog={"teams"} sumPage={sumPage} size={size} />
    </AdminLayout>
  );
};

export default TeamCatalog;

const CatalogWrapper = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  max-width: 1140px;
  width: 100%;
  margin-top: 32px;
  @media ${deviceMax.mobileXL} {
    justify-content: center;
    margin-bottom: 16px;
  }
`;

const CatalogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  a {
    width: 100%;
    max-width: 104px;
  }
  @media ${deviceMax.mobileXL} {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;
  }
`;
const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
`;
