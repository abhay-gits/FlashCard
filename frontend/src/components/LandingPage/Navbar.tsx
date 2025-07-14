import React from "react";
import { SignInButton } from "@clerk/clerk-react";
import logo from "../../assets/logo.svg";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-white text-black h-12 flex items-center justify-between gap-2 px-6">
        <div className="flex gap-3">
          <img src={logo} alt="logo" width={20} />
          <h1 className="font-bold">FlashCard</h1>
        </div>
        <div className="flex items-center gap-7">
          <ul className="hidden sm:flex gap-8 text-xs text-gray-600 font-semibold ">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Features</li>
            <li className="cursor-pointer">Pricing</li>
            <li className="cursor-pointer">Support</li>
          </ul>
          <SignInButton>
          <div className="bg-blue-500 text-white p-2 px-3 text-xs rounded hover:bg-blue-700 transition-all duration-200 cursor-pointer">
            Get Started
          </div>
            </SignInButton>
        </div>
      </div>
      <hr className="text-gray-300" />
    </>
  );
};
