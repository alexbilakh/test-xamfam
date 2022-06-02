import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Pages from "./pages/index";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Garnett",
      "'Segoe UI'",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "'Fira Sans'",
      "'Droid Sans'",
      "'Helvetica Neue'",
      "'sans - serif'",
    ].join(","),
  },
  palette: {
    primary: {
      main: "#022A5E",
      light: "#F4F7FB",
    },
    secondary: {
      main: "#3B4045",
    },
  },
});

function App() {
  return (
    <Box>
      <ThemeProvider theme={theme}>
        <Pages />
      </ThemeProvider>
    </Box>
  );
}

export default App;
