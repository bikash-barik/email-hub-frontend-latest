import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import React from "react";
// import LandingPage from "../components/Application/LoginScreen/LoginScreen";
import LandingPage from "../admin/LoginScreen/LoginScreen"
import LandingPage2 from "../user/SubLoginScreen/LoginScreen";

import Emailsend from "../components/common/SendEmailPagesUI/Componets/EmailSand";


import NotFound from "../Pages/NotFound";

const AppRouter = () => {
  // const [style, setStyle] = useState("bg-color2 ");
  // const [zoomLevel, setZoomLevel] = useState(14); // start with 100% zoom level

  // const handleZoomIn = () => {
  //   setZoomLevel(zoomLevel + 2); // increase zoom level by 25%
  // };
  // const handleZoomOut = () => {
  //   setZoomLevel(zoomLevel - 2); // decrease zoom level by 25%
  // };

  // const handleZoom = () => {
  //   setZoomLevel(14); // decrease zoom level by 25%
  // };

  // const changeStyle = () => {
  //   setStyle("bg-color2");
  // };

  // const changeStyle2 = () => {
  //   setStyle("bg-color");
  // };

  // const changeStyle3 = () => {
  //   setStyle("bg-color3");
  // };
  // const changeStyle4 = () => {
  //   setStyle("bg-color4");
  // };
  // const changeStyle5 = () => {
  //   setStyle("bg-color5 ");
  // };

  // const excludePaths = ["/error"];
  return (
    <>
      <Router>
        <span></span>
        
        <Switch>
          

          <Route
            exact
            path={["/Krishna", "/App"]}
            component={LandingPage}
          />
          <Route
            exact
            path={["/Login", "/Signin"]}
            component={LandingPage2}
          />
          
          <Route path="/Emailsend" component={Emailsend} />

          <Route path="/error" component={NotFound} />
      
          <Redirect to="/error" />
        </Switch>

       
      </Router>
    </>
  );
};

export default AppRouter;
