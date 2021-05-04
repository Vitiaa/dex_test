import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { deviceMax } from "../../Primitives";
import AddButton from "../../common/Button/AddButton";
import SearchInput from "../../common/SearchInput/SearchInput";
import CatalogItem from "../../CatalogItem/CatalogItem";
import { useAppDispatch } from "../../../store";
import { Link } from "react-router-dom";
import { usePlayerSelector } from "../../../store/player";
import { getPlayers } from "../../../store/player/asyncAction";
import { CustomPagination } from "../../Pagination/Pagination";
import MultiSelect from "../../common/MultiSelect/MultiSelect";
import { getTeamsList } from "../../../store/team/asyncAction";
import SearchInput2 from "../../common/SearchInput/Search2";
import { useQuery } from "../../../hooks/hooks";
import { useHistory } from "react-router";
import {
  CustomSelect,
  SizeSelect,
} from "../../common/CustomSelect/CustomSelect";
import Select from "react-select";
import { useTeamSelector } from "../../../store/team";

const sizeOptions = [
  { value: 6, label: "6", color: "#9C9C9C" },
  { value: 12, label: "12", color: "#9C9C9C" },
  { value: 24, label: "24", color: "#9C9C9C" },
];
const PlayerCatalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, page, count, size } = usePlayerSelector(
    (state) => state.players
  );
  const teamsList = useTeamSelector((state) => state.teams?.teamsList);
  const Options = teamsList.map((item: any) => {
    return { value: item.id, label: item.name, color: "#9C9C9C" };
  });
  let sumPage = size ? Math.ceil(count / size) : Math.ceil(count / 6);
  Number.isInteger(sumPage) ? (sumPage = sumPage) : (sumPage = sumPage + 1);
  const pageNum = page;
  let name = "";
  const query: any = useQuery();

  useEffect(() => {
    query.get("searchText") && query.get("searchText").length > 2
      ? dispatch(
          getPlayers({
            pageNum: query.get("page"),
            size: query.get("size"),
            name: query.get("searchText"),
            TeamIds: query.getAll("TeamIds").map(Number),
          })
        )
      : dispatch(
          getPlayers({
            pageNum: query.get("page"),
            size: query.get("size"),
            name,
            TeamIds: query.getAll("TeamIds").map(Number),
          })
        );
  }, [
    query.get("searchText"),
    query.get("page"),
    query.get("size"),
    query.getAll("TeamIds").length,
  ]);
  useEffect(() => {
    dispatch(getTeamsList());
    dispatch(
      getPlayers({
        pageNum : query.get("page"),
        size: query.get("size") !== null ? query.get("size") : 6,
        name,
        TeamIds: [],
      })
    );
  }, []);
  const PlayerList = useMemo(
    () =>
      items.length ? (
        items.map((item: any) => <CatalogItem key={item.id} item={item} />)
      ) : (
        <p>lol </p>
      ),
    [items]
  );

  return (
    <CatalogWrapper>
      <CatalogHeader>

        <SearchInput />
        <MultiSelect options={Options} />


        <Link to={"/AddPlayer"}>
          <AddButton />
        </Link>
      </CatalogHeader>
      <ItemListWrapper>
        <ItemList>{PlayerList}</ItemList>
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
  );
};

export default PlayerCatalog;

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
const SearchWrapper = styled.div`
display: flex;

`
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
