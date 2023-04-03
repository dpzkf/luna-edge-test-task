export interface IMoviesPaginationProps {
  pageQuantity: number;
  page: number;
  onPaginationChange: (event: React.ChangeEvent<unknown>, num: number) => void;
}
