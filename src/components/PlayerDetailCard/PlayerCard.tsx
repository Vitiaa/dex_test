import React from "react";
import { Redirect, useParams } from "react-router";
import styled from "styled-components";
import CardHeader from "./CardHeader";
import { deviceMax } from "../Primitives";
import { AdminLayout } from "../Layout";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";

const PlayerCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { playerID }: { playerID: string } = useParams();
  const player: any = useSelector<any>((state) =>
    state.players?.items.find((item: any) => item.id === Number(playerID))
  );
  const team: any = useSelector<any>((state) =>
    state.teams?.items.find((item: any) => item.id === 493)
  );
  console.log(team);
  if (!player) {
    return <Redirect to={"/PlayerCatalog"} />;
  }
  return (
    <AdminLayout hasHeader={true}>
      {
        <>
          <CardHeader
            isPlayer={true}
            isTeam={false}
            itemID={Number(playerID)}
            name={player.name}
          />
          <TeamCardBackground>
            <TeamCardWrapper>
              <LeftTeamBlock>
                <TeamLogo
                  src={`http://dev.trainee.dex-it.ru${player.avatarUrl}`}
                />
              </LeftTeamBlock>
              <RightTeamBlock>
                <PlayerNameWr>
                  <TeamName>{player.name}</TeamName>
                  &nbsp;
                  <PlayerNumber>#{player.number}</PlayerNumber>
                </PlayerNameWr>
                <BreakItem />
                <TeamDecription>
                  <TeamDecriptionGroup>
                    <TeamDecriptionTitle>Position</TeamDecriptionTitle>
                    <TeamDecriptionSubTitle>
                      {player.position}
                    </TeamDecriptionSubTitle>
                  </TeamDecriptionGroup>
                  <TeamDecriptionGroup>
                    <TeamDecriptionTitle>Team</TeamDecriptionTitle>
                    <TeamDecriptionSubTitle>
                      {player.team}
                    </TeamDecriptionSubTitle>
                  </TeamDecriptionGroup>
                  <br />
                  <TeamDecriptionGroup>
                    <TeamDecriptionTitle>Height</TeamDecriptionTitle>
                    <TeamDecriptionSubTitle>
                      {player.height}&nbsp; сm
                    </TeamDecriptionSubTitle>
                  </TeamDecriptionGroup>
                  <TeamDecriptionGroup>
                    <TeamDecriptionTitle>Weight</TeamDecriptionTitle>
                    <TeamDecriptionSubTitle>
                      {player.weight}&nbsp; kg
                    </TeamDecriptionSubTitle>
                  </TeamDecriptionGroup>
                  <br />
                  <TeamDecriptionGroup>
                    <TeamDecriptionTitle>age</TeamDecriptionTitle>
                    <TeamDecriptionSubTitle>
                      {player.birthday}
                    </TeamDecriptionSubTitle>
                  </TeamDecriptionGroup>
                </TeamDecription>
              </RightTeamBlock>
            </TeamCardWrapper>
          </TeamCardBackground>
        </>
      }
    </AdminLayout>
  );
};

export default PlayerCard;
const TeamCardBackground = styled.div`
  background: linear-gradient(276.45deg, #707070 0%, #393939 100.28%);
  transform: rotate(-180deg);
  max-width: 1140px;
  border-radius: 10px 10px 0px 0px;
  margin: auto;
`;
const TeamCardWrapper = styled.div`
  display: flex;
  margin: auto;
  max-width: 1140px;

  width: 100%;
  transform: rotate(-180deg);
  font-weight: 800;
  color: #ffffff;
  @media ${deviceMax.tablet} {
    flex-direction: column;
    justify-content: center;
  }
`;
const LeftTeamBlock = styled.div`
  display: flex;
  margin: auto;
  padding: 0px 145px 0px;
  @media ${deviceMax.tablet} {
    padding: 0px;
    margin-top: 48px;
    margin-bottom: 48px;
  }
`;
const TeamLogo = styled.img`
  max-width: 210px;
  max-height: 210px;
  @media ${deviceMax.mobileM} {
    max-width: 90px;
    max-height: 90px;
  }
`;
const RightTeamBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${deviceMax.tablet} {
    font-size: 17px;
    justify-content: center;
  }
  media ${deviceMax.mobileL} {
    text-align: center;
  }
`;
const PlayerNameWr = styled.div`
  margin-bottom: 40px;
  margin-top: 65px; 
  display flex;
`;

const TeamName = styled.h2`
  font-size: 36px;

  @media ${deviceMax.tablet} {
    font-size: 17px;
    margin-top: 0px;
  }
`;
const PlayerNumber = styled(TeamName)`
  color: #e4163a;
`;
const TeamDecription = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media ${deviceMax.tablet} {
    flex-direction: column;
  }
`;
const TeamDecriptionGroup = styled.div`
  margin-bottom: 55px;
  margin-right: 85px;
  @media ${deviceMax.tablet} {
    margin-bottom: 32px;
    margin-right: 0;
    align-text: center;
  }
`;
const TeamDecriptionTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 24px;
  @media ${deviceMax.tablet} {
    font-size: 17px;
  }
`;
const TeamDecriptionSubTitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  @media ${deviceMax.tablet} {
    font-size: 15px;
  }
`;
const BreakItem = styled.div`
  flex-basis: 100%;
  height: 0;
`;
