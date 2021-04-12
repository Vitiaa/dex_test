import React, { forwardRef, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { deviceMax } from "../../components/Primitives";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store";
import CardHeader from "../PlayerDetailCard/CardHeader";
import CancelButton from "../UI/Button/CancelButton";
import { addPlayer } from "../../store/player/asyncAction";
import { AdminLayout } from "../Layout";
import { PlayerInterface } from "../../store/player/types";
import { getPlayerPositions } from "../../store/playerPositions/asyncActions";
import { useTeamSelector } from "../../store/team";
import { usePlayerPositionsSelector } from "../../store/playerPositions";
import { getTeams } from "../../store/team/asyncAction";
const AddPlayer: React.FC = () => {
  const { register, handleSubmit, watch, control } = useForm<PlayerInterface>();
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPlayerPositions());
    dispatch(getTeams());
  }, []);

  const positions = usePlayerPositionsSelector(
    (state) => state.playerPositions?.items
  );
  console.log(positions);
  const teamsList: any = useTeamSelector((state) => state.teams?.items);
  console.log(teamsList);
  const onSubmit = (data: any) => {
    dispatch(addPlayer(data));
  };
  const image = watch("image");
  useEffect(() => {
    const imageFile = image;
    const convertBase64 = (imageFile: any) => {
      return new Promise((resolve, reject) => {
        const fileReader: any = new FileReader();
        if (imageFile?.[0] && imageFile?.[0].type.match("image.*")) {
          fileReader.readAsDataURL(imageFile?.[0]);
        }
        fileReader.onload = () => {
          resolve(fileReader.result);
        };
        fileReader.onerror = (error: any) => {
          reject(error);
        };
      });
    };
    async function asyncConvert() {
      const baseUrl: any = await convertBase64(imageFile);
      setImageUrl(baseUrl);
    }
    asyncConvert();
  }, [image]);

  return (
    <AdminLayout hasHeader={true}>
      <>
        <CardHeader
          isTeam={false}
          isPlayer={true}
          name={"Add new player"}
          itemID={0}
        />
        <AddTeamForm onSubmit={handleSubmit(onSubmit)}>
          <AddTeamWrapper>
            <LeftAuthWrap>
              <ImageContainer>
                <img src={imageUrl} />

                <input ref={register} name="image" type="file" />
              </ImageContainer>
            </LeftAuthWrap>
            <RightAuthWrap>
              <Input ref={register} name="name" type="text" />
              {/*<Controller control={control} render={({field}) => <CustomSelect  {...field} options={positions} /> }/>*/}
              {/*<CustomSelect*/}
              {/*  defaultValue={positions}*/}
              {/*  options={positions}*/}
              {/*  onClick={() => console.log("entering")}*/}
              {/*  onChange={(e) => console.log(e.value)}*/}
              {/*/>*/}
              {/*<select ref={register} name="position">*/}
              {/*  {positions.map((position) => {*/}
              {/*    console.log(position);*/}
              {/*    return <option>{position.}</option>;*/}
              {/*  })}*/}
              {/*</select>*/}
              {/*<CustomSelect*/}
              {/*  defaultValue={positions}*/}
              {/*  options={teamsList}*/}
              {/*  onClick={() => console.log("entering")}*/}
              {/*  onChange={(e) => console.log(e.value)}*/}
              {/*/>*/}
              <label htmlFor="">Team</label>
              <select ref={register} name="team">
                {teamsList.map((team: any) => {
                  return (
                    <option key={team.id} value={team.id}>
                      {team.name}
                    </option>
                  );
                })}
              </select>
              <label htmlFor="">Position</label>
              <select ref={register} name="position">
                {positions.map((position: any) => {
                  return (
                    <option key={position.value} value={position.value}>
                      {position.value}
                    </option>
                  );
                })}
              </select>

              <Input ref={register} name="height" type="text" />
              <Input ref={register} name="weight" type="text" />
              <Input ref={register} name="birthday" type="date" />
              <Input ref={register} name="number" type="text" />

              <ButtonsWrapper>
                <CancelButton />

                <Button />
              </ButtonsWrapper>
            </RightAuthWrap>
          </AddTeamWrapper>
        </AddTeamForm>
      </>
    </AdminLayout>
  );
};

export default AddPlayer;

const ImageContainer = styled.div`
  max-width: 366px;
  width: 366px;
  height: 261px;
  max-height: 261px;
  position: relative;
  cursor: pointer;
  background: #9c9c9c;
  opacity: 0.5;
  border-radius: 10px;
  margin-right: 136px;
  input {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    opacity: 0;
    z-index: 9999;
  }
  img {
    max-width: 336px;
    width: 100%;
    height: 100%;
    max-height: 261px;
    border-radius: 10px;
  }
  label {
    display: none;
  }
`;

const AddTeamWrapper = styled.div`
  display: flex;
  max-width: 1140px;
  flex-direction: row;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
`;
const LeftAuthWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 366px;
  max-height: 261px;
  background: #ffffff;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    max-width: 171px;
  }
`;

const RightAuthWrap = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 366px;
  width: 100%;
  height: 100%;
`;

const AddTeamForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
  margin-top: 48px;
  h1 {
    margin: 0;
    margin-bottom: 32px;
    font-size: 36px;
    align-items: center;
    color: #344472;

    @media ${deviceMax.tablet} {
      text-align: center;
    }
  }
`;
