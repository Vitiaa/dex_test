import DateTimeFormat = Intl.DateTimeFormat;

export interface PlayerInterface {
  image: FileList;
  number: number;
  name: string;
  position: string;
  team: number;
  birthday: Date;
  height: number;
  weight: number;
  avatarUrl: string;
}

export interface InitialStatePlayerInterface {
  items: PlayerInterface[];
  loading: false;
  error: null;
  count: number;
  page: number;
  size: number;
}

export interface RootPlayerStateInterface {
  players: InitialStatePlayerInterface;
}
