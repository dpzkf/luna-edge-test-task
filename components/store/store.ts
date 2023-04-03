import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import movieDetailedInfoReducer from "./movieDetailedInfoSlice";

export const store = configureStore({
  reducer: {
    movie: moviesReducer,
    detailedInfo: movieDetailedInfoReducer,
  },
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
