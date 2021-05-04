import React from "react";
import styled from "styled-components";
import Button from "../../ui/Button/Button";
import auth_img from "../../assets/images/auth-img.svg";
import { deviceMax } from "../../constants/Primitives";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../../core/redux/store";
import { useAuthSelector } from "../../modules/auth/authSelector";
import { login } from "../../modules/auth/authThunk";
import { Link } from "react-router-dom";
import { ErrorMessage, ErrorWindow } from "../../ui/ErrorList/ErrorMesage";
import { Input } from "../../ui/Input/Input";

interface IFormInputAuth {
  login: string;
  password: string;
}

const Auth: React.FC = () => {
  const ErrorFromServer = useAuthSelector((state) => state.auth?.error);
  console.log(ErrorFromServer);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputAuth>();
  const dispatch = useAppDispatch();
  const onSubmit = (data: IFormInputAuth) => {
    dispatch(login(data));
  };

  return (
    <AuthWrapper>
      <LeftAuthWrap>
        <AuthForm onSubmit={handleSubmit(onSubmit)}>
          <h1>Sign In</h1>

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
          {ErrorFromServer && (
            <ErrorMessage errorMessage={"Wrong password. Please, try again."} />
          )}
          <Button name={"Sign in"} />
          <LinkWrap>
            Not a member yet? <Link to={"/registration"}>Sing up</Link>{" "}
          </LinkWrap>
        </AuthForm>
      </LeftAuthWrap>
      <RightAuthWrap>
        {ErrorFromServer && <ErrorWindow />}

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
  h1 {
    font-family: AvenirBook, sans-serif;
  }
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
  flex-direction: column;
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
