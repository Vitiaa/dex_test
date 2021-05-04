import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import img_404 from "../../assets/images/illustration.png";

export const Page_404: React.FC = () => {
  return (
    <Wrapp404>
      <div>
        <img src={img_404} alt="" />
        <h1>Page not found</h1>
        <h3>Sorry, we can’t find what you’re looking for</h3>
      </div>
    </Wrapp404>
  );
};

const Wrapp404 = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  div {
    display: flex;
    flex-direction: column;
    align-self: center;
    max-width: 500px;
    width: 100%;
    padding: 10px;
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
