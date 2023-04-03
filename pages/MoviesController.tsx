import { Movies } from "@/components/Movies/Movies";
import {
  fetchData,
  selectMovie,
  selectPending,
  setBookmark,
} from "@/components/store/moviesSlice";
import useDebounceEffect from "@/hooks/useDebounceEffect ";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import MoviesService from "@/services/Movies.service";

import { useState } from "react";

const MoviesController = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(selectMovie);
  const pendingStatus = useAppSelector(selectPending);

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [pagesQuantity, setPagesQuantity] = useState(0);

  const onPaginationChange = (event: any, num: number) => {
    setPage(num);
  };

  const onQueryChange = (event: string) => {
    setQuery(event);
  };

  const onToggleBookMark = (id: string) => {
    dispatch(setBookmark(id));
  };

  const isLoading = () => {
    return pendingStatus;
  };

  useDebounceEffect(
    () => {
      dispatch(fetchData({ page, query }));
      MoviesService.getPagesQuantity({ query }).then((result) =>
        setPagesQuantity(result)
      );
    },
    500,
    [query, page]
  );

  return (
    <Movies
      data={data}
      page={page}
      pagesQuantity={pagesQuantity}
      query={query}
      onQueryChange={onQueryChange}
      onPaginationChange={onPaginationChange}
      onToggleBookMark={onToggleBookMark}
      isLoading={isLoading}
    />
  );
};

export default MoviesController;
