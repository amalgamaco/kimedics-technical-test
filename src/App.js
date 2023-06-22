import './App.css';
import {Box, createTheme, ThemeProvider} from "@mui/material";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import CssBaseline from "@mui/material/CssBaseline";
import * as React from "react";
import Typography from "@mui/material/Typography";


const theme = createTheme({
  palette: {
    primary: {
      main: "#034D7A",
    },
    secondary: {
      main: "#02A89D"
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <SideNavBar/>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}




export default App;
