import { createTheme, ThemeProvider } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Subscribers from "./components/Subscribers/Subscribers";
import users from "./Data.js";
import { useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0A0A0A",
    },
    secondary: {
      main: "#E3E8E8",
    },
  },
});
theme.typography.h1 = {
  fontSize: "2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "4.5rem",
  },
};
function App() {
  const [userData, setUserData] = useState(users);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={<Home newUserData={userData} setUserData={setUserData} />}
          />
          <Route
            exact
            path="/subscribers"
            newUserData={userData}
            element={<Subscribers />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
