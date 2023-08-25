import React from "react";
import ButtonAppBar from "./Header/index";
import LogAppBar from "./Header/logoutIndex";

import { useLocation } from "react-router-dom";

function MainAppBar() {
  const location = useLocation();



  return (
    <>
      <div >
        {location.pathname === "/signup" ||
        location.pathname === "/" ||
        location.pathname === "/login" ? (
          <ButtonAppBar />
        ) : (
          <LogAppBar />
        )}
      </div>
    </>
  );
}

export default MainAppBar;
