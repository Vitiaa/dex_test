import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { deviceMax } from "../../constants/Primitives";
import AddButton from "../../ui/Button/AddButton";
import SearchInput from "../../ui/SearchInput/SearchInput";
import CatalogItem from "../../ui/CatalogItem/CatalogItem";
import { useAppDispatch } from "../../core/redux/store";

import { getTeams } from "../../modules/team/teamThynk";
import { Link } from "react-router-dom";
import { useTeamSelector } from "../../modules/team/teamSelector";
import { CustomPagination } from "../../ui/Pagination/Pagination";
import { SizeSelect } from "../../ui/CustomSelect/CustomSelect";
import { useQuery } from "../../hooks/hooks";
import { getPlayers } from "../../modules/player/plyaerThunk";
import { CatalogEmpty } from "../../ui/CatalogEmpty/CatalogEmpty";

const TeamCatalog: React.FC = () => {
  const dispatch = useAppDispatch();
  const { page, size, items, count } = useTeamSelector((state) => state.teams);
  let unCount = count % 2;
  const sizeOptions = [
    { value: 6, label: "6", color: "#9C9C9C" },
    { value: 12, label: "12", color: "#9C9C9C" },
    { value: 24, label: "24", color: "#9C9C9C" },
  ];
  let sumPage = size ? Math.ceil(count / size) : Math.ceil(count / 6);
  Number.isInteger(sumPage) ? (sumPage = sumPage) : (sumPage = sumPage + 1);
  const pageNum = page;
  let name = "";

  const query: any = useQuery();

  useEffect(() => {
    query.get("searchText") && query.get("searchText").length > 2
      ? dispatch(
          getTeams({
            pageNum: query.get("page"),
            size: query.get("size"),
            name: query.get("searchText"),
          })
        )
      : dispatch(
          getTeams({
            pageNum: query.get("page"),
            size: query.get("size"),
            name,
          })
        );
  }, [query.get("searchText"), query.get("page"), query.get("size"), ,]);
  useEffect(() => {
    dispatch(getTeams({ pageNum: 1, size: 6, name }));
  }, []);

  const teamsList = useMemo(
    () =>
      items.length ? (
        items.map((item: any) => <CatalogItem key={item.id} item={item} />)
      ) : (
        <CatalogEmpty pageName={"teams"} />
      ),
    [items]
  );

  return (
    <>
      <CatalogWrapper>
        <CatalogHeader>
          <>
            <SearchInput />
          </>
          <Link to={"/AddTeam"}>
            <AddButton />
          </Link>
        </CatalogHeader>
        <ItemListWrapper>
          <ItemList>{teamsList}</ItemList>
        </ItemListWrapper>

        {sumPage > 0 ? (
          <PaginationWrapper>
            <CustomPagination
              TypeCatalog={"players"}
              sumPage={sumPage}
              size={size}
            />
            <SizeSelect
              initialValue={size}
              defaultValue={
                query.get("size") == 6
                  ? sizeOptions[0]
                  : query.get("size") == 12
                  ? sizeOptions[1]
                  : query.get("size") == 24
                  ? sizeOptions[2]
                  : sizeOptions[0]
              }
              options={sizeOptions}
            />
          </PaginationWrapper>
        ) : null}
      </CatalogWrapper>
    </>
  );
};

export default TeamCatalog;

const CatalogWrapper = styled.div`
  background: #f6f6f6;
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
const PaginationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const CatalogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 32px;
  a {
    width: 100%;
  }
  @media (max-width: 1025px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 16px;
  }
`;
const LeftHeader = styled.div`

 display: flex;
 justify-content: space-between;
   @media (max-width: 1020px) {
     flex-direction: column;
   
`;
const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1300px;
  width: 100%;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 0;
  }
`;
const ItemListWrapper = styled.div`
  display: flex;
  max-height: 65vh;
  @media (max-width: 700px) {
    max-height: 60vh;
  }
`;
