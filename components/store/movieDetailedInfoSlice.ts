import { IDetailedInfoState, IDetailedInfo } from "./types/index";
import MoviesService from "@/services/Movies.service";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState: IDetailedInfoState = {
  data: <IDetailedInfo>{},
  pending: false,
  error: false,
};

export const fetchDetailedInfo = createAsyncThunk(
  "detailedInfo/fetchDetailedInfo",
  MoviesService.getDetailedInfo
);

export const movieDetailedInfoSlice = createSlice({
  name: "detailedInfo",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDetailedInfo.pending, (state) => {
        state.pending = true;
      })
      .addCase(fetchDetailedInfo.fulfilled, (state, { payload }) => {
        state.pending = false;
        state.data = payload;
      })
      .addCase(fetchDetailedInfo.rejected, (state) => {
        state.pending = false;
        state.error = true;
      });
  },
});

export const selectDetailedInfo = (state: RootState) => state.detailedInfo.data;
export const selectPending = (state: RootState) => state.detailedInfo.pending;
export const selectError = (state: RootState) => state.detailedInfo.error;

export default movieDetailedInfoSlice.reducer;
