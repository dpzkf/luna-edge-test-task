import { IMovie } from "./../../../../store/types/index";
export interface IMoviesItemProps {
  movie: IMovie;
  onToggleBookMark: (id: string) => void;
}
