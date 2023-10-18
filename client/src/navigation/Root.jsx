import React from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Root = () => {
  return (
    <div className="w-full">
      {/*Header*/}
      <Header />

      {/*Body*/}

      <div className="w-full">
        <Outlet />
      </div>

      {/*Footer*/}
      <Footer />
    </div>
  );
};

export default Root;
