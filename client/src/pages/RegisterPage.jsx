import React from "react";
import GooglePic from "../images/Google.svg";
import { useNavigate } from "react-router-dom";
import { AuthContainer } from "../components";

const RegisterPage = () => {
  const navigate = useNavigate();
  return (
    <div className="pt-[92px] w-full">
      <AuthContainer>
        <div className="w-[40%] flex items-center justify-center">
          <div className="flex items-start flex-col">
            <div className="flex items-start flex-col gap-6">
              <h2 className="text-[36px] font-medium tracking-[1.44px]">
                Create an Account
              </h2>
              <p className="text-[16px] leading-[24px] font-normal">
                Enter your details below
              </p>
            </div>

            {/*Form*/}
            <div className="flex items-start flex-col gap-[40px] pt-[48px] w-full">
              <input
                type="text"
                className="pb-2 outline-none border-b border-b-[#000]/50 text-[16px] leading-[24px] w-full"
                placeholder="Name"
              />

              <input
                type="text"
                className="pb-2 outline-none border-b border-b-[#000]/50 text-[16px] leading-[24px] w-full"
                placeholder="Email and Phone Number"
              />

              <input
                type="text"
                className="pb-2 outline-none border-b border-b-[#000]/50 text-[16px] leading-[24px] w-full"
                placeholder="Password"
              />

              <div className="flex w-full flex-col gap-4">
                <div className="w-full flex items-center justify-center py-4 bg-buttonColor cursor-pointer">
                  <span className="text-[16px] text-white font-medium leading-[24px]">
                    Create Account
                  </span>
                </div>

                <div className="w-full flex items-center gap-3 justify-center py-4 border border-[#000]/40 cursor-pointer">
                  <img src={GooglePic} alt="google" />
                  <span className="text-[16px] text-black font-medium leading-[24px]">
                    Sign up with Google
                  </span>
                </div>
              </div>

              <div className="flex w-full items-center justify-center gap-4">
                <span className="text-[16px] text-black/70 font-normal leading-[24px]">
                  Already have an account?
                </span>
                <span
                  className="text-[16px] text-buttonColor font-medium leading-[24px] underline cursor-pointer"
                  onClick={() => navigate("/login")}
                >
                  Login
                </span>
              </div>
            </div>
          </div>
        </div>
      </AuthContainer>
    </div>
  );
};

export default RegisterPage;
