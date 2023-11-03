import React from "react";
import { Link } from "react-router-dom";

export const HeroNavigationContainer = (props) => {
  const { navigation, children } = props;

  return (
    <div className="py-[80px] w-full max-w-7xl mx-auto">
      {/*Navigation*/}
      <div className="mb-[40px] flex items-center gap-3">
        {navigation.map((nav, index) => {
          return (
            <div
              className="flex items-center gap-3 text-[#000] font-Poppins"
              key={index}
            >
              <Link
                to={nav.link}
                className={`text-[14px] leading-[21px] cursor-pointer ${
                  navigation.length === index + 1 ? "opacity-100" : "opacity-50"
                }`}
              >
                {nav.name}
              </Link>
              {navigation.length === index + 1 ? null : (
                <span
                  className={`text-[14px] leading-[21px] ${
                    navigation.length === index + 1
                      ? "opacity-100"
                      : "opacity-50"
                  }`}
                >
                  /
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/*Remaining content*/}
      <div className="w-full">{children}</div>
    </div>
  );
};
