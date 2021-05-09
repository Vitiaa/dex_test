import React, { useEffect } from "react";
import styled from "styled-components";
import { deviceMax } from "../../constants/Primitives";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../core/redux/store";
import { getTeamsPlayers } from "../../modules/player/plyaerThunk";
import { usePlayerSelector } from "../../modules/player/playerSelector";

interface IProps {
  teamID: number;
}
const TeamsPlayersList: React.FC<IProps> = ({ teamID }) => {
  const dispatch = useAppDispatch();
  const players = usePlayerSelector((state) => state.players?.items);
  useEffect(() => {
    dispatch(getTeamsPlayers(teamID));
  }, []);
  return (
    <TeamsPlayersTable2>
      <TableHeader2>Roster</TableHeader2>

      <TableSuBHeader>
        <TDPayerNumber2>#</TDPayerNumber2>
        <TDPlayerInfo2>Player</TDPlayerInfo2>

        <TDPlayerHeight2>Height</TDPlayerHeight2>
        <TDPlayerWeight2>Weight</TDPlayerWeight2>
        <TDPlayeAge2>Age</TDPlayeAge2>
      </TableSuBHeader>
      {players.map((player: any) => {
        const now = new Date();
        const birthday = Number(player?.birthday.substring(0, 4));
        const age = now.getFullYear() - birthday;
        return (
          <TableRow2 key={player.id}>
            <TDPayerNumber2>
              {player.number ? player.number : "-"}
            </TDPayerNumber2>
            <TDPlayerInfo2>
              <Link to={`/PlayerCard/${player.id}`}>
                <PlayerInfoContainer2>
                  <PlayerImg
                    src={`http://dev.trainee.dex-it.ru${player.avatarUrl}`}
                  />
                  <PlayerText2>
                    <PlayerName2>{player.name}</PlayerName2>
                    <PlayerPosition2>{player.position}</PlayerPosition2>
                  </PlayerText2>
                </PlayerInfoContainer2>
              </Link>
            </TDPlayerInfo2>
            <TDPlayerHeight2>{player.height} cm</TDPlayerHeight2>
            <TDPlayerWeight2>{player.weight} kg</TDPlayerWeight2>
            <TDPlayeAge2>{age}</TDPlayeAge2>
          </TableRow2>
        );
      })}
    </TeamsPlayersTable2>
  );
};

export default TeamsPlayersList;

const TeamsPlayersTable2 = styled.div`
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
  color: #707070;
  @media ${deviceMax.tablet} {
    border-radius: 0px;
  }
`;
const TableHeader2 = styled.div`
  text-align: start;
  margin: 0;
  padding: 14px 45px 14px;
  box-sizing: border-box;
  border-radius: 0px;
  text-align: start;
  font-size: 18px;
  color: #707070;
  font-style: normal;
  font-weight: bold;
`;
const TableSuBHeader = styled.div`
  display: flex;
  padding: 8px 0px 8px;
  border-top: 0.5px solid #9c9c9c;
  box-sizing: border-box;
`;
const TableRow2 = styled.div`
  border-top: 0.5px solid #9c9c9c;
  box-sizing: border-box;
  display: flex;
  padding: 8px 0px 8px;
  box-sizing: border-box;
`;

const TDPayerNumber2 = styled.div`
  width: 10%;
  text-align: center;
`;
const TDPlayerInfo2 = styled.div`
  text-align: start;
  width: 60%;
`;
const PlayerInfoContainer2 = styled.div`
  display: flex;
`;

const PlayerText2 = styled.div`
  display: flex;
  flex-direction: column;
`;
const PlayerName2 = styled.p`
  margin-bottom: 5px;
`;
const PlayerPosition2 = styled.p`
  font-size: 12px;
`;
const TDPlayerHeight2 = styled.div`
  width: 10%;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;
const TDPlayerWeight2 = styled.div`
  width: 10%;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;
const TDPlayeAge2 = styled.div`
  width: 10%;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;

const PlayerImg = styled.img`
  width: 52px;
  height: 38px;
  margin-right: 10px;
`;
