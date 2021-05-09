export interface InitialStateAuthInterface {
  isAuth: boolean;
  token: string;
  name: string;
  status: string;
  error: boolean;
}


export interface RootAuthStateInterface {
  auth: InitialStateAuthInterface
}


export interface RegistrationInterface {
  userName: string;
  login: string;
  password: string;
}
export interface AuthParams
    extends Pick<RegistrationInterface, "login" | "password"> {}


export interface InitialStateRegistrationInterface {
  user: RegistrationInterface[];
  loading: false;
  error: null;
}

export interface RootRegistrationStateInterface {
  user: InitialStateRegistrationInterface;
}