import React from "react";
import logo from "../assets/logo.svg";

export const Navbar: React.FC = () => {
  return (
    <>
      <div className="bg-white text-black h-12 flex items-center justify-between gap-2 px-4">
        <div className="flex">
          <img src={logo} alt="logo" width={20} />
          <h1 className="font-bold">FlashCard</h1>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 rounded px-2"
          />
          <img
            className="mask mask-circle"
            src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp"
            width={30} />
        </div>
      </div>
    </>
  );
};
