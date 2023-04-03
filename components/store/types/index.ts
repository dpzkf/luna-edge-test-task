export interface IMovie {
  Title: string;
  Poster: string;
  Year: string;
  imdbID: string;
  bookmark: boolean;
}

export interface IMovieState {
  data: IMovie[];
  pending: boolean;
  error: boolean;
}

export interface IDetailedInfo {
  Title: string;
  Poster: string;
  Genre: string;
  Released: string;
  Actors: string;
  Plot: string;
  Runtime: string;
  imdbVotes: string;
  imdbRating: string;
}

export interface IDetailedInfoState {
  data: IDetailedInfo;
  pending: boolean;
  error: boolean;
}
