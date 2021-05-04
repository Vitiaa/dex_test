import React from "react";
import styled from "styled-components";
import player_img from "../../assets/images/playerErrorSearch.png";
import team_img from "../../assets/images/teamErrorSearch.png";

export const CatalogEmpty: React.FC<{ pageName: string }> = (pageName) => {
  console.log(pageName.pageName);
  return (
    <CatalogEmptyWrapper>
      <div>
        <img
          src={pageName.pageName == "teams" ? team_img : player_img}
          alt=""
        />
        <h1>Page not found</h1>
        <h3>Add new {pageName.pageName} to continue</h3>
      </div>
    </CatalogEmptyWrapper>
  );
};

const CatalogEmptyWrapper = styled.div`
  display: flex;
  align-self: center;
  max-width: 556px;
  max-height: 570px;
  background: #ffffff;
  border-radius: 15px;
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  h1 {
    color: #ff768e;
    font-size: 36px;
  }
  h3 {
    color: #707070;
    font-size: 24px;
  }
`;
