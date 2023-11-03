import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { RiTwitterLine, RiLinkedinBoxFill } from "react-icons/ri";

export const Footer = () => {
  return (
    <footer className="w-full bg-black py-[80px] text-white flex items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex items-center gap-[36px] justify-between">
        <div className="flex flex-col gap-4 items-start">
          <Link to="/">
            <span className="text-[24px] font-bold ">Lumina Gadgets</span>
          </Link>

          <span className="w-[350px] text-left">
            Lumina Gadgets is your one stop shop for your favourite computer
            accessory and mobile gadgets
          </span>

          <div className="flex items-center gap-4">
            <FaFacebookF color="#fff" size={16} />
            <RiTwitterLine color="#fff" size={16} />
            <FaInstagram color="#fff" size={16} />
            <RiLinkedinBoxFill color="#fff" size={16} />
          </div>
        </div>
        <div className="flex items-start flex-col gap-[12px] text-[14px] leading-[20px]">
          <h5 className="text-[18px] font-semibold">Company</h5>
          <Link to="/">Home</Link>
          <Link to="/">Contact</Link>
          <Link to="/">About</Link>
          <Link to="/register">Sign up</Link>
        </div>

        <div className="flex items-start flex-col gap-[12px] text-[14px] leading-[20px]">
          <h5 className="text-[18px] font-semibold">Shop</h5>
          <Link to="/">Game & Video</Link>
          <Link to="/">Phone & Tablets</Link>
          <Link to="/">Computer & Laptops</Link>
          <Link to="/register">Smart watches</Link>
        </div>

        <div className="flex items-start flex-col gap-[12px] text-[14px] leading-[20px]">
          <h5 className="text-[18px] font-semibold">Support</h5>
          <Link to="/">FAQ</Link>
          <Link to="/">Reviews</Link>
          <Link to="/">Contact us</Link>
          <Link to="/register">Shipping</Link>
        </div>
      </div>
    </footer>
  );
};
