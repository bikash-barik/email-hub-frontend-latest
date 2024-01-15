import React, { useEffect } from "react";
import { useSelector } from "react-redux";


export default function Dashboard({history}) {


  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  if (!userInfo) {
    history.push("/login");
    window.location.reload(false);
  }


  return (
    <>
      <h3>
        <i class="bi bi-geo-alt-fill"></i>
        <span> Home /</span>Dashboard
      </h3>
      {/* <DashboardPart /> */}
    </>
  );
}
