import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import { deviceMax } from "../../components/Primitives";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store";
import CardHeader from "../PlayerDetailCard/CardHeader";
import CancelButton from "../UI/Button/CancelButton";
import { editTeam } from "../../store/team/asyncAction";
import { AdminLayout } from "../Layout";
import { TeamInterface } from "../../store/team/types";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

const EditTeam: React.FC = () => {
  const { teamID }: { teamID: string } = useParams();
  console.log(teamID);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TeamInterface>();
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useAppDispatch();
  const onSubmit = (data: TeamInterface) => {
    data.id = Number(teamID);
    console.log(data);
    dispatch(editTeam(data));
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
          isTeam={true}
          isPlayer={false}
          name={`Edit Team ${teamID}`}
          itemID={0}
        />
        <AddTeamForm onSubmit={handleSubmit(onSubmit)}>
          <AddTeamWrapper>
            <LeftAuthWrap>
              <ImageContainer>
                <img src={imageUrl} />

                <input {...register} name="image" type="file" />
              </ImageContainer>
            </LeftAuthWrap>
            <RightAuthWrap>
              <Input {...register} name="name" type="text" />
              <Input {...register} name="division" type="text" />
              <Input {...register} name="conference" type="text" />
              <Input {...register} name="foundationYear" type="text" />

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

export default EditTeam;

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
