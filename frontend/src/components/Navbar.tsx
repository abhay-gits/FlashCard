import React from "react";
import logo from "../assets/logo.svg";
import { UserButton } from "@clerk/clerk-react";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-white text-black h-12 flex items-center justify-between gap-2 px-4">
        <div className="flex gap-2">
          <img src={logo} alt="logo" width={20} />
          <h1 className="font-bold">Revisly</h1>
        </div>
        <div className="flex items-center gap-2">
          <UserButton />
        </div>
      </div>
    </>
  );
};
