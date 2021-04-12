import React from "react";
import styled from "styled-components";
import Input from "../../components/UI/Input/Input";
import Button from "../../components/UI/Button/Button";
import auth_img from "../../assets/auth-img.svg";
import { deviceMax } from "../../components/Primitives";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../store";
import { login } from "../../store/auth";
import { Link } from "react-router-dom";

interface IFormInputAuth {
  login: string;
  password: string;
}

const Auth: React.FC = () => {
  const { register, handleSubmit } = useForm<IFormInputAuth>();
  const dispatch = useAppDispatch();
  const onSubmit = (data: IFormInputAuth) => {
    dispatch(login(data));
  };

  return (
    <AuthWrapper>
      <LeftAuthWrap>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>

          <Input ref={register} name="login" type="text" />

          <Input ref={register} name="password" type="password" />

          <Button />
          <LinkWrap>
            Not a member yet? <Link to={"/registration"}>Sing up</Link>{" "}
          </LinkWrap>
        </AuthForm>
      </LeftAuthWrap>
      <RightAuthWrap>
        <AuthImage src={auth_img} />
      </RightAuthWrap>
    </AuthWrapper>
  );
};

export default Auth;

const AuthWrapper = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: #ffffff;
`;
const LeftAuthWrap = styled.div`
  max-width: 606px;
  display: flex;
  width: 100%;
  height: 100%;
  background: #ffffff;
`;

const RightAuthWrap = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background: #f5fbff;
  @media ${deviceMax.tablet} {
    display: none;
  }
`;
const AuthImage = styled.img`
  max-width: 510px;
  margin: auto;
  padding: 15px;
  background: #f5fbff;
`;
const AuthForm = styled.form`
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
