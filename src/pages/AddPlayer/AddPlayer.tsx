import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Input } from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { deviceMax } from "../../components/Primitives";
import { Controller, useForm } from "react-hook-form";
import { useAppDispatch } from "../../core/redux/store";
import CardHeader from "../PlayerDetailCard/CardHeader";
import CancelButton from "../../ui/Button/CancelButton";
import { addPlayer } from "../../modules/player/plyaerThunk";
import { AdminLayout } from "../../ui/layouts/Layout";
import { PlayerInterface } from "../../modules/player/types";
import { getPlayerPositions } from "../../modules/playerPositions/playerPositionsThunk";
import { useTeamSelector } from "../../modules/team/teamSelector";
import { usePlayerPositionsSelector } from "../../modules/playerPositions/playerPositionsSelector";
import { getTeamsList } from "../../modules/team/teamThynk";
import { ErrorMessage } from "../../ui/ErrorList/ErrorMesage";
import { CustomSelect } from "../../ui/CustomSelect/CustomSelect";
const AddPlayer: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    control,
  } = useForm<PlayerInterface>();
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPlayerPositions());
    dispatch(getTeamsList());
  }, []);

  const positionsList = usePlayerPositionsSelector(
    (state) => state.playerPositions?.items
  );
  const positions = positionsList.map((position: any) => {
    return { value: position.value, label: position.value, color: "#9C9C9C" };
  });
  // console.log(positions);
  const teamsList: any = useTeamSelector((state) => state.teams?.teamsList);
  const Options = teamsList.map((item: any) => {
    return { value: item.id, label: item.name, color: "#9C9C9C" };
  });
  const onSubmit = (data: any) => {
    dispatch(
      addPlayer({
        ...data,
        position: data.position.value,
        team: data.team.value,
      })
    );
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

      <FormWrapper>
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

                <input {...register("image")} name="image" type="file" />
                {errors.image && (
                  <ErrorMessage errorMessage={"This field is recurred"} />
                )}
              </ImageContainer>
            </LeftAuthWrap>
            <RightAuthWrap>
              <Input
                {...register("name", { required: true })}
                name="name"
                type="text"
              />
              {errors.name && (
                <ErrorMessage errorMessage={"This field is recurred"} />
              )}
              <label htmlFor="">Team</label>

              <Controller
                name="team"
                control={control}
                render={({ field }) => (
                  <CustomSelect {...field} options={Options} />
                )}
              />
              {errors.team && (
                <ErrorMessage errorMessage={"This field is recurred"} />
              )}

              <label htmlFor="">Position</label>
              <Controller
                name={"position"}
                control={control}
                render={({ field }) => (
                  <CustomSelect {...field} options={positions} />
                )}
              />

              {errors.position && (
                <ErrorMessage errorMessage={"This field is recurred"} />
              )}

              <Input
                {...register("height", {
                  required: true,
                  max: 200,
                  pattern: /^[0-9]+$/i,
                })}
                name="height"
                type="text"
              />
              {errors.height && (
                <ErrorMessage errorMessage={"This field is recurred"} />
              )}
              {errors.height?.type == "max" && (
                <ErrorMessage errorMessage={"This value is too large "} />
              )}
              {errors.height?.type == "pattern" && (
                <ErrorMessage
                  errorMessage={"This field can only have a value of digits"}
                />
              )}

              <Input
                {...register("weight", {
                  required: true,
                  max: 250,
                  pattern: /^[0-9]+$/i,
                })}
                name="weight"
                type="text"
              />
              {errors.weight && (
                <ErrorMessage errorMessage={"This field is recurred"} />
              )}
              {errors.weight?.type == "max" && (
                <ErrorMessage errorMessage={"This value is too large "} />
              )}
              {errors.weight?.type == "pattern" && (
                <ErrorMessage
                  errorMessage={"This field can only have a value of digits"}
                />
              )}

              <Input
                {...register("birthday", { required: true })}
                name="birthday"
                type="date"
              />
              {errors.birthday && (
                <ErrorMessage errorMessage={"This field is recurred"} />
              )}

              <Input
                {...register("number", {
                  required: true,
                  max: 250,
                  pattern: /^[0-9]+$/i,
                })}
                name="number"
                type="text"
              />
              {errors.number && (
                <ErrorMessage errorMessage={"This field is recurred"} />
              )}
              {errors.number?.type == "max" && (
                <ErrorMessage errorMessage={"This value is too large "} />
              )}
              {errors.number?.type == "pattern" && (
                <ErrorMessage
                  errorMessage={"This field can only have a value of digits"}
                />
              )}

              <ButtonsWrapper>
                <CancelButton />
                <Button name={"Save"} />
              </ButtonsWrapper>
            </RightAuthWrap>
          </AddTeamWrapper>
        </AddTeamForm>
      </FormWrapper>

  );
};

export default AddPlayer;

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  width: 65vw;
  max-width: 65vw;
  border-radius: 10px 10px 10px 10px;
  min-width: 375px;
  @media (max-width: 1141px) {
    margin-top: 55px;
  }
   @media (max-width: 587px) {
    height: 144px;
      width: 375px;
      justify-content: center;
  }
`;
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

  @media (max-width: 587px) {
    height: 144px;
      width: 185px;
          justify-content: center;
  }
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
  img {  height: 100%;
    width: 100%;

    border-radius: 10px;
   
  }
  label {
    display: none;
  }
`;

const AddTeamWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background: #ffffff;
  max-width: 1140px;
  flex-direction: row;
  background: #ffffff;
  border-radius: 10px 10px 0px 0px;
  @media (max-width: 1141px) {
    flex-direction: column;
  }
`;
const LeftAuthWrap = styled.div`
  display: flex;
  width: 100%;
  max-width: 366px;
  max-height: 261px;
  background: #ffffff;
   @media (max-width: 587px) {
          justify-content: center;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    max-width: 171px;
  }
`;

const RightAuthWrap = styled.div`
  margin-left: 136px;
  display: flex;
  flex-direction: column;
  max-width: 366px;
  width: 100%;
  height: 100%;
  @media (max-width: 1317px) {
    margin-left:  50px;
  }
  
   @media (max-width: 1143px) {
    margin-left:  0px;
  }
  @media (max-width: 587px) {
    max-width: 327px;

    align-self: center;
  }
`;

const AddTeamForm = styled.form`
  background: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 100%;
  width: 100%;
  margin: auto;
  margin-top: 48px;
  margin-bottom: 48px;
  @media (max-width: 1141px) {
    margin-top: 0;
  }
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
