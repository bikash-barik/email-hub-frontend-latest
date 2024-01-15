import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "./MenuItem";
import { logout } from "../../Redux/actions/userActions";
import "../../Style/SideBar.css"
import { useHistory } from "react-router";

/**
 * @author
 * @function SideMenu
 **/

// added more menuItems for testing
export const menuItems = [
  {
    name: "Dashboard",
    exact: true,
    to: "/hub/Dashbord",
    iconClassName: "bi bi-house-door",
  },
  {
    name: "Manage User",
    exact: true,
   
    iconClassName: "bi bi-people",
    subMenus: [
      { name: "User Profile ", to: "/hub/UserProfile" },
    ],
  },
  
  {
    name: "Applications",
    exact: true,
    
    iconClassName: "bi bi-briefcase",
    subMenus: [
      { name: "Add Domain", to: "/hub/AddDomain" },
      { name: "Domain Country", to: "/hub/DomainCountry" },
      { name: "E-Mail Extract", to: "/hub/EmailExtract" },
      { name: "E-Mail Verify", to: "/hub/ValidEmail" },
      { name: "E-Mail Send", to: "/hub/Emailsend" },
     
    ],
  },
  {
    name: "Settings",
    exact: true,
   
    iconClassName: "bi bi-gear-fill",
    subMenus: [
      { name: "Change Password", to: "/hub/PasswordChange" },
      { name: "View Profile", to: "/hub/profile" },
    ],
  },
  
];

const SideMenu = (props) => {
  const [inactive, setInactive] = useState(false);
  const [date, setDate] = useState(new Date());
  //Login Credentials
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const history = useHistory();

  const logoutHandler = () => {
    if (window.confirm("Are you sure to logout?")) {
      dispatch(logout());
      history.push("/");
      window.location.reload(true);
    }
  };
  useEffect(() => {
    var timer = setInterval(() => setDate(new Date()), 1000);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  useEffect(() => {}, [userInfo]);
  //end of the login

  useEffect(() => {
    if (inactive) {
      removeActiveClassFromSubMenu();
    }

    props.onCollapse(inactive);
  }, [inactive]);

  //just an improvment and it is not recorded in video :(
  const removeActiveClassFromSubMenu = () => {
    document.querySelectorAll(".sub-menu").forEach((el) => {
      el.classList.remove("active");
    });
  };

  /*just a little improvement over click function of menuItem
    Now no need to use expand state variable in MenuItem component
  */
  useEffect(() => {
    let menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach((el) => {
      el.addEventListener("click", (e) => {
        const next = el.nextElementSibling;
        removeActiveClassFromSubMenu();
        menuItems.forEach((el) => el.classList.remove("active"));
        el.classList.toggle("active");
        console.log(next);
        if (next !== null) {
          next.classList.toggle("active");
        }
      });
    });
  }, []);

 
  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="logo">
          <a href="/">
            <img src="https://images.squarespace-cdn.com/content/v1/5e69125d8547fa37422b094d/1615386460841-1FL5027OROZIH37M4BTF/email-logo.png" alt="webscript" />
            {/* <img src={headerLogo} alt="webscript" /> */}
           
          </a>
        </div>
        <div onClick={() => setInactive(!inactive)} className="toggle-menu-btn">
          {inactive ? (
            <i class="bi bi-arrow-right-square-fill"></i>
          ) : (
            <i class="bi bi-arrow-left-square-fill"></i>
          )}
        </div>
      </div>

      <div className="search-controller">
        <button className="search-btn">
          <i class="bi bi-search"></i>
        </button>

        <input type="text" placeholder="search" />
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              exact={menuItem.exact}
              to={menuItem.to}
              subMenus={menuItem.subMenus || []}
              iconClassName={menuItem.iconClassName}
              onClick={(e) => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          <a onClick={logoutHandler} className="text-decoration-none">
            <li>
              <samp className="menu-item">
                <div className="menu-icon">
                  <i class="bi bi-box-arrow-left"></i>
                </div>
                <span>Logout</span>
              </samp>
            </li>
          </a>
          
        </ul>
      </div>

      <a href="/hub/profile">
        <div className="side-menu-footer">
          <div className="avatar">
            <img src={`${userInfo.pic}`} alt="user" />
          </div>
          <div className="user-info">
            <h5 className="h3 text-white bold"> {`${userInfo.name}`}</h5>
            <p>
              {date.toLocaleDateString()} {date.toLocaleTimeString()}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SideMenu;
