import styled from "styled-components";
import { Redirect } from "react-router";
import { useAppDispatch } from "../../../store";
import { deleteTeam } from "../../../store/team/asyncAction";
import React from "react";
import { deletePlayer } from "../../../store/player/asyncAction";
import { Link } from "react-router-dom";
import { deletePlayerFromState } from "../../../store/player";
import { deleteTeamFromState } from "../../../store/team";
interface IProps {
  itemID: number;
  isTeam: boolean;
  isPlayer: boolean;
  name: string;
}

const CardHeader: React.FC<IProps> = ({ itemID, isPlayer, isTeam, name }) => {
  const dispatch = useAppDispatch();
  const deleteItem = () => {
    if (isPlayer) {
      dispatch(deletePlayer(itemID));
      dispatch(deletePlayerFromState(itemID));
    } else {
      dispatch(deleteTeam(itemID));
      dispatch(deleteTeamFromState(itemID));
    }
    return <Redirect to={"/"} />;
  };

  return (
    <>
      <CardHeaderWrapper>
        <BreadCrumbs>
          <Link to={isPlayer ? "/PlayerCatalog" : "/TeamCatalog"}>
            <span>{isPlayer ? "Players" : "Teams"}</span>
          </Link>

          <p> / </p>
          <span>{name}</span>
        </BreadCrumbs>
        {itemID !== 0 ? (
          <IconBlock>
            <Link
              to={`${
                isPlayer ? `/EditPlayer/${itemID}` : `/EditTeam/${itemID}`
              }`}
            >
              <EditBtn>
                {" "}
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="create">
                    <path
                      id="create_2"
                      d="M13.806 3.75426C14.066 4.01426 14.066 4.43426 13.806 4.69426L12.586 5.91426L10.086 3.41426L11.306 2.19426C11.4305 2.06942 11.5996 1.99927 11.776 1.99927C11.9523 1.99927 12.1214 2.06942 12.246 2.19426L13.806 3.75426ZM1.99927 13.6676V11.6409C1.99927 11.5476 2.0326 11.4676 2.09927 11.4009L9.3726 4.12758L11.8726 6.62758L4.5926 13.9009C4.5326 13.9676 4.44593 14.0009 4.35927 14.0009H2.3326C2.14593 14.0009 1.99927 13.8543 1.99927 13.6676Z"
                      fill="#9C9C9C"
                    />
                  </g>
                </svg>
              </EditBtn>
            </Link>

            <DeleteBtn onClick={deleteItem}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 16 16"
                fill="#e4163a"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="delete">
                  <path
                    id="delete_2"
                    d="M10.3333 2.66667H11.9999C12.3666 2.66667 12.6666 2.96667 12.6666 3.33333C12.6666 3.7 12.3666 4 11.9999 4H3.99992C3.63325 4 3.33325 3.7 3.33325 3.33333C3.33325 2.96667 3.63325 2.66667 3.99992 2.66667H5.66659L6.13992 2.19333C6.25992 2.07333 6.43325 2 6.60659 2H9.39325C9.56659 2 9.73992 2.07333 9.85992 2.19333L10.3333 2.66667ZM5.33325 14C4.59992 14 3.99992 13.4 3.99992 12.6667V6C3.99992 5.26667 4.59992 4.66667 5.33325 4.66667H10.6666C11.3999 4.66667 11.9999 5.26667 11.9999 6V12.6667C11.9999 13.4 11.3999 14 10.6666 14H5.33325Z"
                    fill="#9C9C9C"
                  />
                </g>
              </svg>
            </DeleteBtn>
          </IconBlock>
        ) : null}
      </CardHeaderWrapper>
    </>
  );
};

export default CardHeader;

const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 32px 0px;
  background: #ffffff;
  border: { "0.5px solid #9c9c9c"};
  box-sizing: border-box;
  border-radius: 10px 10px 0px 0px;
  max-width: 1140px;
  width: 100%;
  height: 70px;
  align-text: center;
  min-width: 375px;
@media (max-width: 1141px) {
      padding: 16px 16px 16px;
`;
const BreadCrumbs = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  span {
    font-size: 14px;
    color: #e4163a;
  }
`;
const IconBlock = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const DeleteBtn = styled.div`
  width: 24px;
  height: 24px;
  svg:hover path {
    fill: #e4163a;
  }
`;
const EditBtn = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 25px;
  svg:hover path {
    fill: #e4163a;
  }
`;
