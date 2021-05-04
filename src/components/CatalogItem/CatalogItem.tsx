import React from "react";
import styled from "styled-components";
import { deviceMax } from "../Primitives";
import { Link } from "react-router-dom";
import { useTeamSelector } from "../../store/team";
import { usePlayerSelector } from "../../store/player";
interface IProps {
  item: {
    name: string;
    foundationYear: number;
    division: string;
    conference: string;
    id: number;
    imageUrl: string;

    //
    number: number;
    position: string;
    team: number;
    birthday: Date;
    height: number;
    weight: number;
    avatarUrl: string;
  };
}
const CatalogItem: React.FC<IProps> = ({ item }) => {
  const teamName: any = useTeamSelector((state) =>
    state.teams?.teamsList.find((e: any) => e.id === item.team)
  );

  return (
    <CatalogItemWrapper>
      <Link
        to={item.avatarUrl ? `/PlayerCard/${item.id}` : `/TeamCard/${item.id}`}
      >
        <CatalogImg
          src={
            item.imageUrl
              ? `http://dev.trainee.dex-it.ru${item.imageUrl}`
              : `http://dev.trainee.dex-it.ru${item.avatarUrl}`
          }
        />
        <ItemContent>
          <ItemTitle>
            <p>{item.name || item.name}</p>
            <span>{item.number && `# ${item.number}`}</span>
          </ItemTitle>
          <ItemSubTitle>
            {item.foundationYear
              ? ` Year of foundation: ${item.foundationYear}`
              : teamName?.name}
          </ItemSubTitle>
        </ItemContent>
      </Link>
    </CatalogItemWrapper>
  );
};

export default CatalogItem;

const CatalogItemWrapper = styled.div`
  background: linear-gradient(121.57deg, #707070 1.62%, #393939 81.02%);
  border-radius: 4px;
  max-width: 364px;
  width: 100%;
  max-height: 380px;
  margin: 0px 0px 24px 0px;
  @media ${deviceMax.laptop} {
    max-width: 260px;
    max-height: 280px;
  }
  @media ${deviceMax.tablet} {
    max-width: 170px;
    max-height: 200px;
    margin: 0px 0px 12px 0px;
  }
`;
const CatalogImg = styled.img`
  max-width: 274px;
  max-height: 207px;

   @media (max-width: 1020px) {
     max-width: 121px;
     max-height: 92px;
   }
`;
const ItemContent = styled.div`
  background: #303030;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0px 0px 4px 4px;
`;
const ItemTitle = styled.div`
  margin-top: 19px;
  display: flex;
  align-items: center;
  p {
    color: #ffffff;
    font-size: 18px;
  }
  span {
    color: #ff768e;
    margin-left: 5px;
  }
`;
const ItemSubTitle = styled.p`
  color: #9c9c9c;
  margin-bottom: 19px;
`;
