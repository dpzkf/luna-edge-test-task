import { Box, ImageList, Stack, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { IMoviesProps } from "./types";
import MoviesPagination from "./components/MoviesPagination/MoviesPagination";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import MoviesItem from "./components/MoviesItem/MoviesItem";
import LoadingCircle from "./common/LoadingCircle";
import { theme } from "@/theme/theme";

const MovieContainer = styled(Box)({
  background: "#050d17",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
});

export const Movies = ({
  data,
  page,
  pagesQuantity,
  query,
  onQueryChange,
  onPaginationChange,
  onToggleBookMark,
  isLoading,
}: IMoviesProps) => {
  const matchMedium = useMediaQuery(theme.breakpoints.up("md"));
  const matchLarge = useMediaQuery(theme.breakpoints.up("xl"));
  return (
    <MovieContainer>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{ height: { xs: "100%" } }}
      >
        <TextField
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="primary" />
              </InputAdornment>
            ),
          }}
          sx={{ mt: { xs: 2 } }}
        />
        {!!data && (
          <>
            <ImageList
              cols={matchMedium ? (matchLarge ? 5 : 3) : 1}
              gap={25}
              rowHeight={390}
            >
              {data.map((el) => (
                <MoviesItem
                  key={el.imdbID}
                  movie={el}
                  onToggleBookMark={onToggleBookMark}
                />
              ))}
            </ImageList>

            <MoviesPagination
              pageQuantity={pagesQuantity}
              page={page}
              onPaginationChange={onPaginationChange}
            />
          </>
        )}
        {isLoading() && <LoadingCircle />}
      </Stack>
    </MovieContainer>
  );
};
