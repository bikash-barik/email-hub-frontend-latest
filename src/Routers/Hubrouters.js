// import "../App.css";
import SideMenu from "../components/common/SideMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

// pages import
import Dashboard from "../Pages/Dashboard";
// import UserProfile from "../Pages/Application/UserProfile";
import UserProfiles from "../admin/userprofile/UserProfiles";

import { useSelector } from "react-redux";

// import ProfileScreen from "../components/Application/ProfileScreen/ProfileScreen";
import ProfileScreen from "../user/ProfileScreen/ProfileScreen";
// import PasswordChange from "../components/Application/ProfileScreen/PasswordChange";
import PasswordChange from "../user/ProfileScreen/PasswordChange";
import Emailsend from "../components/common/SendEmailPagesUI/Componets/EmailSand";
import DoaminCountry from "../components/common/SendEmailPagesUI/Componets/DoaminCountry";
import UpgradURPlanPart from "../user/UpgradPlan/UpgradURPlanPart";
import AddDomain from "../components/common/SendEmailPagesUI/Pages/AddDomain";
import EmailExtract from "../components/common/SendEmailPagesUI/Componets/EmailExtract";
import ValidEmailsPart from "../components/common/SendEmailPagesUI/Componets/ValidEmailsPart";
function Hubrouters({ history }) {
  const [inactive, setInactive] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!userInfo) {
    history.push("/login");
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Router>
        <SideMenu
          onCollapse={(inactive) => {
            console.log(inactive);
            setInactive(inactive);
          }}
        />

        <div className={`containerall ${inactive ? "inactive" : ""}`}>
          <Switch>
            <Route exact path="/hub/Dashbord" component={Dashboard} />
            <Route exact path="/hub/upplan" component={UpgradURPlanPart} />
            <Route exact path="/hub/upplan1" component={UpgradURPlanPart} />
            <Route exact path="/hub/upplan2" component={UpgradURPlanPart} />
            <Route exact path="/hub/upplan3" component={UpgradURPlanPart} />
            <Route exact path={"/hub/UserProfile"}>
              <UserProfiles />
            </Route>
            <Route path={"/hub/PasswordChange"}>
              <PasswordChange />
            </Route>

            <Route path={"/hub/Profile"}>
              <ProfileScreen />
            </Route>

            <Route path="/hub/Emailsend" component={Emailsend} />
            <Route path="/hub/AddDomain" component={AddDomain} />
            <Route path="/hub/DomainCountry" component={DoaminCountry} />
            <Route path="/hub/EmailExtract" component={EmailExtract} />
            <Route path="/hub/ValidEmail" component={ValidEmailsPart} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Hubrouters;
