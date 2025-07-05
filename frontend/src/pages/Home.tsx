import React from "react";
import { Navbar } from "../components/Navbar";

export const Home: React.FC = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="bg-white px-40 py-10 text-black">
            <div>
                <h1 className="font-bold text-2xl mb-1">Decks</h1>
                <p className="font-light">Browse and select decks to study</p>
                <input
                type="text"
                placeholder="Search decks"
                className="bg-gray-200 px-3 rounded w-full h-8 mt-4"
                />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-gray-100 mt-4 p-4 h-40 rounded cursor-pointer"></div>
            </div>
      </div>
    </div>
  );
};
