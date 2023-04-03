import { Box, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";

const CenterLoadingCircle = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const LoadingCircle = () => {
  return <CenterLoadingCircle><CircularProgress/></CenterLoadingCircle>;
};

export default LoadingCircle;
