import {
  fetchDetailedInfo,
  selectDetailedInfo,
  selectPending,
} from "@/components/store/movieDetailedInfoSlice";
import { useAppDispatch, useAppSelector } from "@/hooks/useReduxHooks";
import { Stack } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Divider from "@mui/material/Divider";
import LoadingCircle from "@/components/Movies/common/LoadingCircle";

const MovieDetailContainer = styled(Box)(({ theme }) => ({
  background: "#050d17",
  height: "100vh",
  padding: "0 70px",
  overflow: "auto",
  [theme.breakpoints.down("lg")]: {
    padding: "0 20px",
  },
}));

const TextOfSubhead = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
}));
const TitleOfSubhead = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.main,
  marginTop: "18px",
}));

const MovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const data = useAppSelector(selectDetailedInfo);
  const dispatch = useAppDispatch();
  const pending = useAppSelector(selectPending);

  useEffect(() => {
    id && dispatch(fetchDetailedInfo({ id }));
  }, [id]);

  return (
    <MovieDetailContainer>
      {!!data && (
        <>
          <Typography variant="h3" sx={{ pt: 2 }}>
            {data.Title}
          </Typography>
          <TextOfSubhead variant="h6" sx={{ ml: 1 }}>
            {data.Released}
          </TextOfSubhead>
          <Stack direction={{ xs: "column", lg: "row" }}>
            <Stack
              direction="column"
              sx={{ my: "10px", mx: { xs: "0", lg: "16px" }, mr: 4 }}
              justifyContent={{ xs: "center", lg: "flex-start" }}
              alignItems={{ xs: "center", lg: "flex-start" }}
            >
              <Box
                component="img"
                src={data.Poster}
                sx={{
                  width: "250px",
                  height: "400px",
                  objectFit: "fill",
                }}
              />
              <TextOfSubhead sx={{ mt: 2 }}>IMDb RATING</TextOfSubhead>
              <Typography
                variant="h6"
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <StarBorderIcon sx={{ color: "primary.main", mr: 0.5 }} />
                {data.imdbRating}{" "}
                <Typography variant="inherit" sx={{ color: "#b1b1b1" }}>
                  {" "}
                  /10
                </Typography>
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{ color: "#b1b1b1", ml: 3.5 }}
              >
                {data.imdbVotes} votes
              </Typography>
            </Stack>
            <Stack sx={{ mt: 3, mb: 1 }}>
              <Typography variant="h5">Genre</Typography>
              <TextOfSubhead>{data.Genre}</TextOfSubhead>

              <TitleOfSubhead variant="h5">Actors</TitleOfSubhead>
              <TextOfSubhead>{data.Actors}</TextOfSubhead>

              <TitleOfSubhead variant="h5">Runtime</TitleOfSubhead>
              <TextOfSubhead>{data.Runtime}</TextOfSubhead>
              <Divider sx={{ mt: 1, bgcolor: "#b1b1b1", width: 200 }} />

              <TitleOfSubhead variant="h5">Plot</TitleOfSubhead>
              <TextOfSubhead>{data.Plot}</TextOfSubhead>
            </Stack>
          </Stack>
        </>
      )}
      {pending && <LoadingCircle />}
    </MovieDetailContainer>
  );
};
export default MovieDetail;
