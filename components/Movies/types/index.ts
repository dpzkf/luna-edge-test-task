import { IMovie } from "./../../store/types/index";
export interface IMoviesProps {
  data: IMovie[];
  page: number;
  pagesQuantity: number;
  query: string;
  onQueryChange: (event: string) => void;
  onPaginationChange: (_: React.ChangeEvent<unknown>, num: number) => void;
  onToggleBookMark: (id: string) => void;
  isLoading: () => boolean;
}
