import React from "react";
import styled from "styled-components";
import { deviceMax } from "../../constants/Primitives";
import SearchInput from "../SearchInput/SearchInput";
import { Link } from "react-router-dom";

import { CustomPagination } from "../Pagination/Pagination";

export const AdminLayout: React.FC<{ hasHeader: boolean }> = ({
  children,
  hasHeader,
}) => {
  return (
    <ContentWrapper>
      <CatalogHeader>
        <>
          <SearchInput />
        </>
      </CatalogHeader>

      {children}
      <CustomPagination TypeCatalog={"players"} sumPage={6} size={6} />
    </ContentWrapper>
  );
};

const ContentWrapper = styled.div`
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

const NavWrapper = styled.div``;
const NavItem = styled.div``;
const Logout = styled.div``;
