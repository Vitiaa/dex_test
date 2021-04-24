import React from "react";
import { Redirect, useParams } from "react-router";
import styled from "styled-components";
import CardHeader from "../PlayerDetailCard/CardHeader";
import { deviceMax } from "../Primitives";
import { AdminLayout } from "../Layout";
import { useAppDispatch } from "../../store";
import { useSelector } from "react-redux";
import TeamsPlayersList from "../TeamsPlayersList/TeamsPlayersList";

const TeamCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { teamID }: { teamID: string } = useParams();
  const team: any = useSelector<any>((state) =>
    state.teams?.items.find((item: any) => item.id === Number(teamID))
  );
  // const team = useTeamSelector((state) =>
  //   state.teams?.items.find((item) => item.id === Number(teamID))
  // );

  if (!team) {
    return <Redirect to={"/"} />;
  }
  return (
    <AdminLayout hasHeader={true}>
      {
        <>
          <CardHeader
            isPlayer={false}
            isTeam={true}
            itemID={Number(teamID)}
            name={team.name}
          />
          <TeamCardBackground>
            <TeamCardWrapper>
              <LeftTeamBlock>
                <TeamLogo
                  src={`http://dev.trainee.dex-it.ru${team.imageUrl}`}
                />
              </LeftTeamBlock>
              <RightTeamBlock>
                <TeamName>{team.name}</TeamName>
                <BreakItem />
                <TeamDecription>
                  <TeamDecriptionGroup>
                    <TeamDecriptionTitle>
                      Year of foundation
                    </TeamDecriptionTitle>
                    <TeamDecriptionSubTitle>
                      {team.foundationYear}
                    </TeamDecriptionSubTitle>
                  </TeamDecriptionGroup>
                  <TeamDecriptionGroup>
                    <TeamDecriptionTitle>Division</TeamDecriptionTitle>
                    <TeamDecriptionSubTitle>
                      {team.division}
                    </TeamDecriptionSubTitle>
                  </TeamDecriptionGroup>
                  <br />
                  <TeamDecriptionGroup>
                    <TeamDecriptionTitle>Conference</TeamDecriptionTitle>
                    <TeamDecriptionSubTitle>
                      {team.conference}
                    </TeamDecriptionSubTitle>
                  </TeamDecriptionGroup>
                </TeamDecription>
              </RightTeamBlock>
            </TeamCardWrapper>
          </TeamCardBackground>

          <TeamsPlayersList teamID={Number(teamID)} />
        </>
      }
    </AdminLayout>
  );
};

export default TeamCard;
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

const TeamName = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  margin-top: 65px;
  @media ${deviceMax.tablet} {
    font-size: 17px;
    margin-top: 0px;
  }
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
