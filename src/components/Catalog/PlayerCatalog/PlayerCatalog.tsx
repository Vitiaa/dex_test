import React, { useEffect } from "react";
import styled from "styled-components";
import { deviceMax } from "../../Primitives";
import AddButton from "../../UI/Button/AddButton";
import SearchInput from "../../UI/SearchInput/SearchInput";
import CatalogItem from "../../CatalogItem/CatalogItem";
import { useAppDispatch } from "../../../store";
import { useSelector } from "react-redux";
import { AdminLayout } from "../../Layout";
import { Link } from "react-router-dom";
import { usePlayerSelector } from "../../../store/player";
import { getPlayers2,getPlayers } from "../../../store/player/asyncAction";
import {CustomPagination} from "../../Pagination/Pagination";

const PlayerCatalog: React.FC = () => {
  const dispatch = useAppDispatch();

  const {items,page,count,size}= usePlayerSelector((state) => state.players);
  const sumPage = Math.floor(count / 6) + 1;
  console.log(sumPage);
  const pageNum= page
  let    name = ''
  console.log(size);
  useEffect(() => {
    dispatch(getPlayers2({pageNum,size,name}));
  }, []);

  return (
    <AdminLayout hasHeader={true}>
      <CatalogWrapper>
        <CatalogHeader>
          <>
            <SearchInput TypeCatalog={"players"} size={1}/>

          </>
          <Link to={"/AddPlayer"}>
            <AddButton />
          </Link>
        </CatalogHeader>
        <ItemList>
          {items.map((item: any) => {
            return <CatalogItem key={item.id} item={item} />;
          })}
        </ItemList>
        <CustomPagination TypeCatalog={"players"} sumPage={sumPage} size={size}/>
      </CatalogWrapper>
    </AdminLayout>
  );
};

export default PlayerCatalog;

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
