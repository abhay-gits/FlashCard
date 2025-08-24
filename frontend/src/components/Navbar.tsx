import React from "react";
import logo from "../assets/logo.svg";
import { UserButton } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white text-black h-12 flex items-center justify-between gap-2 px-4">
        <div className="flex gap-2 cursor-pointer" onClick={()=>navigate('/')} >
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
