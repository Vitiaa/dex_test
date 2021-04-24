export interface TeamInterface {
  image: FileList;
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  id: number;
  imageUrl: string;
}

export interface InitialStateTeamsInterface {
  items: TeamInterface[];
  loading: false;
  error: null;
  count: number;
  page: number | null;
  size: any;
  teamForPlayer:any
}

export interface RootTeamStateInterface {
  teams: InitialStateTeamsInterface;
}
