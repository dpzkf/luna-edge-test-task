import { createTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";

declare module "@mui/system" {
  interface DefaultTheme extends Theme {}
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#fcba03",
    },
    secondary: {
      main: "#463d1c",
    },
    action: {
      hover: "#262626",
    },
    text: {
      primary: "#fff",
      secondary: "#949494",
    },
  },
});
