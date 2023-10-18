import React from "react";

export const AuthContainer = ({ children }) => {
  return (
    <div className="w-full flex items-center">
      {/*Left*/}
      <div className="w-[60%]">
        <img src="/LoginImg.svg" alt="Login-img" />
      </div>

      {/*Right*/}
      {children}
    </div>
  );
};
