import styled from "styled-components";
import delete_rounded from "../../assets/Icons/delete_rounded.svg";
import create_rounded from "../../assets/Icons/create_rounded.svg";
import { useParams } from "react-router";
import { useAppDispatch } from "../../core/redux/store";
import { deleteTeam } from "../../modules/team/teamThynk";

const CardHeader: React.FC = () => {
  const dispatch = useAppDispatch();
  const { teamID }: { teamID: string } = useParams();
  const delID = Number(teamID);

  return (
    <CardHeaderWrapper>
      <BreadCrumbs>
        <span>Teams </span>
        <p> / </p>
        <span>Denver Nuggets</span>
      </BreadCrumbs>
      <IconBlock>
        <EditBtn src={create_rounded} />
        <DeleteBtn
          src={delete_rounded}
          onClick={() => dispatch(deleteTeam(delID))}
        />
      </IconBlock>
    </CardHeaderWrapper>
  );
};

export default CardHeader;

const CardHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding:0px 32px 0px;
    background: #FFFFFF;
    border: 0.5px solid #9C9C9C;
    box-sizing: border-box;
    border-radius: 10px 10px 0px 0px;
    max-width:1140px;
    width:100%;
    height:70px;
    margin: auto;
    margin-top: 32px; 
    
    align-text: center;
`;
const BreadCrumbs = styled.div`
  align-items: center;
  display: flex;
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

const DeleteBtn = styled.img`
  width: 24px;
  height: 24px;
`;
const EditBtn = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 25px;
`;
