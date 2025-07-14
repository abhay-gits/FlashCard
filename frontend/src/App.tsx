import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import { Deck } from "./pages/Flashcards";

function App() {
  return (
    <header>
      <SignedOut>
        <LandingPage />
      </SignedOut>
      <SignedIn>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deck/:deckId" element={<Deck />} />
        </Routes>
      </SignedIn>
    </header>
  );
}

export default App;
