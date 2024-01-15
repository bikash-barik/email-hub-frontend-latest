// import "../App.css";

import SubSideMenu from "../components/common/SubSideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// pages import
import Dashboard from "../Pages/Dashboard";

import { useSelector } from "react-redux";
// import ProfileScreen from "../components/Application/ProfileScreen/SubProfileScreen";
import ProfileScreen from "../user/ProfileScreen/SubProfileScreen";
// import PasswordChange from "../components/Application/ProfileScreen/PasswordChange";
import PasswordChange from "../user/ProfileScreen/PasswordChange";
// import Emailsend from "../Pages/SendEmailPagesUI/Componets/EmailSand";
import Emailsend from "../components/common/SendEmailPagesUI/Componets/EmailSand";
// import DoaminCountry from "../Pages/SendEmailPagesUI/Componets/DoaminCountry";
import DoaminCountry from "../components/common/SendEmailPagesUI/Componets/DoaminCountry";
import UpgradURPlanPart from "../user/UpgradPlan/UpgradURPlanPart";
// import AddDomain from "../Pages/SendEmailPagesUI/Pages/AddDomain";
import AddDomain from "../components/common/SendEmailPagesUI/Pages/AddDomain";
import EmailExtract from "../components/common/SendEmailPagesUI/Componets/EmailExtract";
import ValidEmailsPart from "../components/common/SendEmailPagesUI/Componets/ValidEmailsPart";
import HorizontalLinearStepper from "../components/common/SendEmailPagesUI/Componets/Stepper";

function UserHubrouters({ history }) {
  const [inactive, setInactive] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log("users", userLogin);
  if (!userInfo) {
    history.push("/login");
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Router>
        <SubSideMenu
          onCollapse={(inactive) => {
            setInactive(inactive);
          }}
        />

        <div className={`containerall ${inactive ? "inactive" : ""}`}>
          <Switch>
            <Route exact path="/user/Dashbord" component={Dashboard} />
            <Route exact path="/user/upplan" component={AddDomain} />
            <Route
              exact
              path="/user/upplan1"
              component={
                userInfo.applicationAccess1 ? DoaminCountry : UpgradURPlanPart
              }
            />
            <Route
              exact
              path="/user/upplan2"
              component={
                userInfo.applicationAccess2 ? EmailExtract : UpgradURPlanPart
              }
            />
            <Route
              exact
              path="/user/upplan3"
              component={
                userInfo.applicationAccess3 ? ValidEmailsPart : UpgradURPlanPart
              }
            />

            <Route path={"/user/PasswordChange"}>
              <PasswordChange />
            </Route>

            <Route path={"/user/Profile"}>
              <ProfileScreen />
            </Route>
            
            <Route path="/user/stepper" component={HorizontalLinearStepper} />

            <Route
              path="/user/Emailsend"
              component={
                userInfo.applicationAccess4 ? Emailsend : UpgradURPlanPart
              }
            />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default UserHubrouters;
