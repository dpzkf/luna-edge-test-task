import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { IMoviesItemProps } from "./types";
import Link from "next/link";
import {
  Box,
  IconButton,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";

const MoviesItem = ({ movie, onToggleBookMark }: IMoviesItemProps) => {
  return (
    <>
      <ImageListItem>
        <Link
          href={{
            pathname: `/movies/MovieDetail`,
            query: { id: movie.imdbID },
          }}
        >
          <Box
            component="img"
            src={movie.Poster}
            alt={movie.Title}
            sx={{
              width: "250px",
              height: "380px",
              objectFit: "fill",
            }}
            loading="lazy"
          />
        </Link>
        <ImageListItemBar
          sx={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
          }}
          title={movie.Title}
          position="top"
          actionIcon={
            <IconButton
              sx={{ color: "primary.main" }}
              aria-label={`${movie.Title}`}
              onClick={() => onToggleBookMark(movie.imdbID)}
            >
              {movie.bookmark ? <BookmarkIcon /> : <BookmarkBorderIcon />}
            </IconButton>
          }
          actionPosition="left"
        />
        <ImageListItemBar
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.7) 0%, " +
              "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
            mb: "10.5px",
          }}
          title={movie.Year}
          position="bottom"
        />
      </ImageListItem>
    </>
  );
};

export default MoviesItem;
