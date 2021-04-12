export interface InitialStateAuthInterface {
  isAuth: boolean;
  token: string;
  name: string;
}

export interface RootAuthStateInterface {
  auth: InitialStateAuthInterface;
}
