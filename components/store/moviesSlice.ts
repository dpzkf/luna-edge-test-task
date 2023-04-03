import MoviesService from "@/services/Movies.service";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { IMovieState } from "./types";

const initialState: IMovieState = {
  data: [],
  pending: false,
  error: false,
};

export const fetchData = createAsyncThunk(
  "movie/fetchData",
  MoviesService.getMovies
);

export const moviesSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setBookmark(state, action: PayloadAction<string>) {
      const data = state.data.find((el) => el.imdbID === action.payload);
      if (data) {
        data.bookmark = !data.bookmark;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchData.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectMovie = (state: RootState) => state.movie.data;
export const selectPending = (state: RootState) => state.movie.pending;
export const selectError = (state: RootState) => state.movie.error;

export const { setBookmark } = moviesSlice.actions;

export default moviesSlice.reducer;
