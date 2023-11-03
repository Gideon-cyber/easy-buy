import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full fixed left-0 top-0 bg-white pt-[40px] pb-[16px] h-[92px] border-b-black border-opacity-30 border z-40">
      <nav className="flex items-center justify-between w-full max-w-7xl mx-auto ">
        <Link to="/">
          <span className="text-[24px] font-bold ">Lumina Gadgets</span>
        </Link>

        <div className="flex items-center gap-[48px] text-[16px] font-Poppins">
          <Link to="/">Home</Link>
          <Link to="/">Contact</Link>
          <Link to="/about">About</Link>
          <Link to="/register">Sign up</Link>
        </div>

        <div className="relative w-fit">
          <input
            type="text"
            className=" py-[7px] pl-[20px] pr-[12px] bg-[#f5f5f5] rounded-[4px] text-[12px] leading-[18px] text-black"
            placeholder="What are you looking for?"
          />
          <img
            src="/Search.svg"
            alt="icon"
            className="w-[16px] absolute right-[10px] top-2"
          />
        </div>
      </nav>
    </header>
  );
};
