export interface InitialStateAuthInterface {
  isAuth: boolean;
  token: string;
  name: string;
  status: string;
  error: boolean;
}

export interface RootAuthStateInterface {
  auth: InitialStateAuthInterface;
}
