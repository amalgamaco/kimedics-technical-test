import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import SideNavBar from "./components/SideNavBar/SideNavBar";
import * as React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import PracticesPage from "./pages/Practices/PracticesPage";
import {PRACTICES_PATH} from "./components/SideNavBar/NavigationItems";
import Box from "@mui/material/Box";


const theme = createTheme({
  palette: {
    primary: {
      main: "#034D7A",
      selectedNavBarIcon: "#0088da"
    },
    secondary: {
      main: "#02A89D",
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Box sx={{ display: 'flex' }}>
          <SideNavBar>
              <Routes>
                <Route exact path="/" element={<HomePage />} />
                <Route path={PRACTICES_PATH} element={<PracticesPage/>}/>
              </Routes>
          </SideNavBar>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}




export default App;
