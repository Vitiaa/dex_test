import React, { useEffect } from "react";
import styled from "styled-components";
import Player_mini_img from "../../assets/Player_mini_img.png";
import { deviceMax } from "../Primitives";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../store";

import { getTeamsPlayers } from "../../store/player/asyncAction";
import { usePlayerSelector } from "../../store/player";
import CatalogItem from "../CatalogItem/CatalogItem";
interface IProps2 {
  teamID: number;
}
const TeamsPlayersList: React.FC<IProps2> = ({ teamID }) => {
  // console.log(teamID);
  const dispatch = useAppDispatch();
  const players = usePlayerSelector((state) => state.players?.items);
  let playerCount = 0;
  // console.log(players);
  useEffect(() => {
    dispatch(getTeamsPlayers(teamID));
  }, []);
  return (
    <TeamsPlayersTable>
      <TableHeader>
        <tr>
          <th>Roster</th>
        </tr>
      </TableHeader>
      <tbody>
        <TableRow>
          <TDPayerNumber>#</TDPayerNumber>
          <TDPlayerName>Player</TDPlayerName>
          <TDPlayerHeight>Height</TDPlayerHeight>
          <TDPlayerWeight>Weight</TDPlayerWeight>
          <TDPlayeAge>Age</TDPlayeAge>
        </TableRow>
        {players.map((player: any) => {
          playerCount = playerCount + 1;
          return (
            <TableRow key={player.id}>
              <TDPayerNumber>{playerCount}</TDPayerNumber>
              <TDPlayerInfo>
                <Link to={`/PlayerCard/${player.id}`}>
                  <PlayerInfoContainer>
                    <PlayerImg
                      src={`http://dev.trainee.dex-it.ru${player.avatarUrl}`}
                    />
                    <PlayerText>
                      <PlayerName>{player.name}</PlayerName>
                      <PlayerPosition>{player.position}</PlayerPosition>
                    </PlayerText>
                  </PlayerInfoContainer>
                </Link>
              </TDPlayerInfo>
              <TDPlayerHeight>{player.height} cm</TDPlayerHeight>
              <TDPlayerWeight>{player.weight} kg</TDPlayerWeight>
              <TDPlayeAge>{player.birthday}</TDPlayeAge>
            </TableRow>
          );
        })}
      </tbody>
    </TeamsPlayersTable>
  );
};

export default TeamsPlayersList;

const TeamsPlayersTable = styled.table`
  max-width: 1140px;
  width: 100%;
  margin: auto;
  margin-top: 25px;
  background: #ffffff;
  border: 0.5px solid #9c9c9c;
  box-sizing: border-box;
  border-radius: 10px 10px 10px 10px;
  border-spacing: 0;
  text-align: center;
  font-size: 14px;
  @media ${deviceMax.tablet} {
    border-radius: 0px;
  }
`;
const TableHeader = styled.thead`
  margin: 0;
  border: 0.5px solid #9c9c9c;
  box-sizing: border-box;
  border-radius: 0px;
  text-align: center;
  font-size: 18px;
  color: #707070;
  font-style: normal;
  font-weight: 500;
  th {
    padding: 14px 0px 14px;
  }
`;
const TableRow = styled.tr`
  padding: 8px 0px 8px;
  box-sizing: border-box;
  td {
    border-top: 0.5px solid #9c9c9c;
    color: #707070;
    padding: 8px 0px 8px;
    text-align: start;
  }
`;
const TDPlayerName = styled.td``;
const TDPayerNumber = styled.td`
  width: 10%;
  text-align: center !important;
`;
const TDPlayerInfo = styled.td`
  width: 60%;
`;
const PlayerInfoContainer = styled.div`
display flex;


`;
const PlayerImg = styled.img`
  width: 52px;
  height: 38px;
  margin-right: 10px;
`;
const PlayerText = styled.div`
  display: flex;
  flex-direction: column;
`;
const PlayerName = styled.p`
  margin-bottom: 5px;
`;
const PlayerPosition = styled.p`
  font-size: 12px;
`;
const TDPlayerHeight = styled.td`
  width: 10%;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;
const TDPlayerWeight = styled.td`
  width: 10%;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;
const TDPlayeAge = styled.td`
  width: 10%;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;
