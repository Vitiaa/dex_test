import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Input } from "../../ui/Input/Input";
import Button from "../../ui/Button/Button";
import { deviceMax } from "../../constants/Primitives";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../core/redux/store";
import CardHeader from "../PlayerDetailCard/CardHeader";
import CancelButton from "../../ui/Button/CancelButton";
import { addTeam } from "../../modules/team/teamThynk";
import { TeamInterface } from "../../modules/team/types";
import { ErrorMessage } from "../../ui/ErrorList/ErrorMesage";

const AddTeam: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TeamInterface>();
  const [imageUrl, setImageUrl] = useState("");
  const dispatch = useAppDispatch();

  const onSubmit = (data: TeamInterface) => {
    console.log(data);
    dispatch(addTeam(data));
  };
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
  const image = watch("image");
  useEffect(() => {
    const imageFile = image;

    async function asyncConvert() {
      const baseUrl: any = await convertBase64(imageFile);
      setImageUrl(baseUrl);
    }
    asyncConvert();
  }, [image]);

  return (
    <FormWrapper>
      <CardHeader
        isTeam={true}
        isPlayer={false}
        name={"Add new team"}
        itemID={0}
      />
      <AddTeamForm onSubmit={handleSubmit(onSubmit)}>
        <AddTeamWrapper>
          <LeftAuthWrap>
            <ImageContainer>
              <img src={imageUrl} />

              <input
                {...register("image", { required: true })}
                name="image"
                type="file"
              />
              {errors.image && (
                <ErrorMessage errorMessage={"This field is recurred"} />
              )}
            </ImageContainer>
          </LeftAuthWrap>
          <RightAuthWrap>
            <Input
              {...register("name", {
                required: true,
              })}
              name="name"
              type="text"
            />
            {errors.name && (
              <ErrorMessage errorMessage={"This field is recurred"} />
            )}

            <Input
              {...register("division", { required: true })}
              name="division"
              type="text"
            />
            {errors.division && (
              <ErrorMessage errorMessage={"This field is recurred"} />
            )}
            <Input
              {...register("conference", { required: true })}
              name="conference"
              type="text"
            />

            {errors.conference && (
              <ErrorMessage errorMessage={"This field is recurred"} />
            )}

            <Input
              {...register("foundationYear", {
                required: true,
                min: 1800,
                pattern: /^[0-9]+$/i,
              })}
              name="foundationYear"
              type="text"
            />
            {errors.foundationYear && (
              <ErrorMessage errorMessage={"This field is recurred"} />
            )}
            {errors.foundationYear?.type == "min" && (
              <ErrorMessage errorMessage={"This value is too small "} />
            )}
            {errors.foundationYear?.type == "pattern" && (
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

export default AddTeam;

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
  img {
    height: 100%;
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
    margin-left: 50px;
  }

  @media (max-width: 1143px) {
    margin-left: 0px;
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
