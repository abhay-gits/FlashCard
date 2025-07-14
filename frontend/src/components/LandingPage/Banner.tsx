import { SignInButton } from "@clerk/clerk-react";
import banner from "../../assets/LandingPage/banner.svg";

export const Banner = () => {
  return (
    <div className="px-3 sm:px-30 py-10 m-auto">
      <div
        className="m-auto bg-gray-500 rounded-2xl h-80 flex items-center justify-center flex-col gap-4 shadow-lg bg-cover bg-center opacity-90 text-white"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <h1 className="text-center text-3xl font-bold">
          Unlock Your Learning Potential
          <br />
          Study Smart
        </h1>
        <p className="text-center text-sm sm:text-base max-w-2xl">
          Transform the way you study with our intuitive flashcard app. Create,
          Customize and conquer anything, anywhere
        </p>
        <SignInButton>
          <div className="bg-blue-500 text-white p-2 px-3 text-xs rounded hover:bg-blue-700 transition-all duration-200 cursor-pointer">
            Get Started
          </div>
        </SignInButton>
      </div>
    </div>
  );
};
