import { Pagination } from "@mui/material";
import { IMoviesPaginationProps } from "./types";

const MoviesPagination = ({
  pageQuantity,
  page,
  onPaginationChange,
}: IMoviesPaginationProps) => {
  return (
    <>
      {pageQuantity > 1 && (
        <Pagination
          count={pageQuantity}
          page={page}
          onChange={(event, num) => onPaginationChange(event, num)}
          hidePrevButton
          hideNextButton
        />
      )}
    </>
  );
};

export default MoviesPagination;
