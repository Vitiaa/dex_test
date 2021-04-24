export interface InitialStateAuthInterface {
  isAuth: boolean;
  token: string;
  name: string;
  status: string;
}

export interface RootAuthStateInterface {
  auth: InitialStateAuthInterface;
}
