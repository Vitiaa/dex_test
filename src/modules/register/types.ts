export interface RegistrationInterface {
  userName: string;
  login: string;
  password: string;
}

export interface InitialStateRegistrationInterface {
  user: RegistrationInterface[];
  loading: false;
  error: null;
}

export interface RootRegistrationStateInterface {
  user: InitialStateRegistrationInterface;
}
