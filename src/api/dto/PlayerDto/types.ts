

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
  id: number;
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

export interface PlayerPositionsInterface {
  position: [{ label: string }, { value: string }];
}

export interface InitialStatePlayerPositionsInterface {
  items: PlayerPositionsInterface[];
  loading: false;
  error: null;
  position: string;
}

export interface RootPlayerPositionsStateInterface {
  playerPositions: InitialStatePlayerPositionsInterface;
}
