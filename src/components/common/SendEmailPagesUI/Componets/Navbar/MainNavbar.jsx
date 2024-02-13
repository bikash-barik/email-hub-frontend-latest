import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useSelector } from "react-redux";
// import { logout } from "../../../../Redux/actions/userActions";
import MainHome from "../../../Home.jsx";
import { logout } from "../../../../../Redux/actions/userActions.js";
const settings = ["Login"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  React.useEffect(() => {}, [userInfo]);

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AdbIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 5 }}
              className="m-3"
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Email Hub
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              className="m-1 text-white"
              sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}
            >
              <Tooltip>
                {/* Login/Signup */}
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0 }}
                  className="p-2 text-white h-6"
                >
                  <div className="">
                    {userInfo ? (
                      <a
                        href="/user/profile"
                        className="text-decoration-none text-white d-flex justify-content-between"
                      >
                        <div className="side-menu-footerLogin d-flex justify-content-between">
                          <div className="avatar">
                            <img src={userInfo.pic} alt="user" />
                          </div>
                          <div className=" text-capitalize">
                            <h5 className="px-2 mt-1 h3 text-white bold">
                              Hi ! {userInfo.name}
                            </h5>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <>
                        <a
                          href="/price"
                          className="text-decoration-none text-white mx-2"
                        >
                          Price
                        </a>
                        <a
                          href="/service"
                          className="text-decoration-none text-white mx-2"
                        >
                          Service
                        </a>
                        <a
                          href="/login"
                          className="text-decoration-none text-white mx-2"
                        >
                          Login
                        </a>
                      </>
                    )}
                  </div>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default ResponsiveAppBar;
