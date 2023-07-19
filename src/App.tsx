import React, { useEffect, FunctionComponent } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./main.css";
import { BrowserRouter as Router, Link, NavLink } from "react-router-dom";
import { Provider } from "./context";
import Header from "./common/Header/Header";
import AOS from "aos";
import SiteRoutes from "./routes/SiteRoutes";

const App: FunctionComponent = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <Router>
        <Provider>
          <SiteRoutes />
        </Provider>
      </Router>
    </>
  );
};

export default App;
