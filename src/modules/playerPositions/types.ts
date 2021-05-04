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
