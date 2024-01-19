import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AppRouter from "./AppRouter";
import Home from "../components/common/SendEmailPagesUI/Componets/Navbar/Navbar.js"
import Price from "./../components/common/Price.jsx"

const IndexRouter = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path={["/", "/Home", "/home"]} component={Home} />
          <Route exact path={["/price"]} component={<Price/>} />

          <AppRouter />
          
        </Switch>
      </Router>
    </>
  );
};

export default IndexRouter;
