import React from "react";
import styled from "styled-components";
import { Input } from "../common/Input/Input";
import Button from "../common/Button/Button";
import Registration_img from "../../assets/Registration-img.svg";
import { deviceMax } from "../Primitives";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { RegistrationUser } from "../../store/register";
import { Link } from "react-router-dom";
import { ErrorMessage } from "../common/ErrorList/ErrorMesage";

interface IFormInput {
  userName: string;
  login: string;
  password: string;
  confirmPassword: string;
}

const Registration: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IFormInput>();
  const dispatch = useAppDispatch();
  const countPassword = watch("password");
  const countConfirmPassword = watch("confirmPassword");
  const onSubmit = (data: IFormInput) => {
    dispatch(RegistrationUser(data));
  };

  return (
    <RegistrationWrapper>
      <LeftRegistrationWrap>
        <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <Input
            {...register("userName", { required: true })}
            name="userName"
            type="text"
          />
          {errors.userName && (
            <ErrorMessage errorMessage={"This field is recurred"} />
          )}
          <Input
            {...register("login", { required: true })}
            name="login"
            type="text"
          />
          {errors.login && (
            <ErrorMessage errorMessage={"This field is recurred"} />
          )}
          <Input
            {...register("password", { required: true })}
            name="password"
            type="password"
          />
          {errors.password && (
            <ErrorMessage errorMessage={"This field is recurred"} />
          )}
          <Input
            {...register("confirmPassword", {
              validate: (value) =>
                !!(value == countPassword) ||
                "password and confirmPassword need be similar ",
            })}
            name="confirmPassword"
            type="password"
          />
          {errors.confirmPassword?.type == "validate" && (
            <ErrorMessage
              errorMessage={"password and confirmPassword need be similar "}
            />
          )}

          <Button name={"Sign up"} />

          <LinkWrap>
            Already a member yet? <Link to={"/"}>Sing in</Link>
          </LinkWrap>
        </RegistrationForm>
      </LeftRegistrationWrap>
      <RightRegistrationWrap>
        <RegistrationImage src={Registration_img} />
      </RightRegistrationWrap>
    </RegistrationWrapper>
  );
};

export default Registration;

const RegistrationWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;
const LeftRegistrationWrap = styled.div`
  max-width: 606px;
  display: flex;
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

const RightRegistrationWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f5fbff;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;
const RegistrationImage = styled.img`
  max-width: 510px;
  margin: auto;
  padding: 15px;
  background: #f5fbff;
`;
const RegistrationForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: auto;
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
const LinkWrap = styled.div`
  margin-top: 24px;
  a {
    color: #e4163a;
    text-decoration: underline;
  }
`;
