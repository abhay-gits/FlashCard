import React, { useEffect } from "react";
import { Navbar } from "../components/Navbar";
import axios from "axios";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import deleteIcon from "../assets/delete.svg";

type deck = {
  deck: string;
  _id: string;
};

export const Home: React.FC = () => {
  const [decks, setdecks] = React.useState<deck[]>([]);
  const [newDeck, setNewDeck] = React.useState("");
  const { getToken, isLoaded, isSignedIn } = useAuth();

  const colors = ["#f87171", "#60a5fa", "#34d399", "#fbbf24", "#a78bfa"];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDecks = async () => {
      if (!isLoaded || !isSignedIn) {
        console.error("User is not signed in or auth is not loaded");
        return;
      }
      try {
        const token = await getToken();
        const response = await axios.get("http://localhost:3000/api/deck", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!response.data.decks || response.data.decks.length === 0) {
          console.log("No decks found for this user");
          return;
        }
        setdecks(response.data.decks);
      } catch (error) {
        console.error("Error fetching decks:", error);
      }
    };
    fetchDecks();
  }, []);

  const handleCreateDeck = async () => {
    if (!isLoaded || !isSignedIn) {
      console.error("User is not signed in or auth is not loaded");
      return;
    }
    try {
      const token = await getToken();
      const response = await axios.post(
        "http://localhost:3000/api/deck",
        { deckName: newDeck },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setdecks((prev) => [...prev, response.data]);
      setNewDeck("");
    } catch (error) {
      console.error("Error creating deck:", error);
    }
  };

  //delete deck
  const handleDeleteDeck = async (id: string) => {
    if (!isLoaded || !isSignedIn) {
      console.error("User is not signed in or auth is not loaded");
      return;
    }
    try {
      const token = await getToken();
      await axios.delete(`http://localhost:3000/api/deck/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setdecks((prev) => prev.filter((deck) => deck._id !== id));
    } catch (error) {
      console.error("Error deleting deck:", error);
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <hr className="text-gray-200" />
      <div className="bg-white px-8 sm:px-40 py-10 text-black">
        <div>
          <h1 className="font-bold text-2xl mb-1">Decks</h1>
          <p className="font-light">Browse and select decks to study</p>
          <div className="flex items-center mt-4">
            <input
              type="text"
              value={newDeck}
              onChange={(e) => setNewDeck(e.target.value)}
              placeholder="Create new deck"
              className="bg-gray-200 px-3 rounded w-full h-8"
            />
            <button
              onClick={handleCreateDeck}
              className="bg-blue-500 text-white px-2 py-1 rounded ml-2 cursor-pointer hover:bg-blue-600 transition duration-200"
            >
              Create
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
          {decks.map((deck, index) => (
              <div onClick={() => navigate(`/deck/${deck._id}`)}
                className=" mt-4 p-4 h-40 rounded cursor-pointer"
                key={deck._id}
                style={{ backgroundColor: colors[index % colors.length] }}
              >
                <div className="flex justify-end gap-2 items-center mb-2 ">
                <img src={deleteIcon} width={16} 
                onClick={(e)=>{
                  e.stopPropagation();
                  handleDeleteDeck(deck._id)}}/>
                </div>
                <h1 className="font-bold text-center text-white pt-5">{deck.deck}</h1>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
};
