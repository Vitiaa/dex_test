import React from "react";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import Registration_img from "../../assets/Registration-img.svg";
import { deviceMax } from "../../components/Primitives";
import { useForm, Controller } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { RegistrationUser } from "../../store/register";
import { Link } from "react-router-dom";

interface IFormInput {
  userName: string;
  login: string;
  password: string;
  confirmPassword: string;
}

const Registration: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInput>();
  const dispatch = useAppDispatch();
  const onSubmit = (data: IFormInput) => {
    dispatch(RegistrationUser(data));
  };

  return (
    <RegistrationWrapper>
      <LeftRegistrationWrap>
        <RegistrationForm onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign Up</h1>
          <Input ref={register} name="userName" type="text" />
          <Input ref={register} name="login" type="text" />
          <Input ref={register} name="password" type="password" />
          {/*<Input ref={register} name="confirmPassword" type="password" />*/}

          <Button />

          <LinkWrap>
            Already a member yet? <Link to={"/"}>Sing ip</Link>
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
