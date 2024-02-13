import * as React from "react";
import MainNavbar from "./../Navbar/MainNavbar.jsx";
import MainHome from "../../../Home.jsx";
import Footer from "../../../../footer/Footer.jsx";

const ResponsiveAppBar = () => {
  return (
    <>
      <MainNavbar />
      <MainHome />
      <Footer/>
    </>
  );
};

export default ResponsiveAppBar;
