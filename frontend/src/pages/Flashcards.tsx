import axios from "../utils/axios";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";
import deleteIcon from "../assets/delete.svg";
import edit from "../assets/edit.svg";

export const Deck = () => {

  type Flashcard = {
    _id?: string;
    deckId?: string;
    question: string;
    answer: string;
  };
  
  const { getToken, isLoaded, isSignedIn } = useAuth();
  const [flashcards, setFlashcards] = useState<Flashcard[]>([]);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const { deckId } = useParams();
  
  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        if (!isLoaded || !isSignedIn) {
          //console.error("User is not signed in or auth is not loaded");
          return;
        }
        const token = await getToken();
        const response = await axios.get(
          `/api/flashcard/${deckId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (!response.data) {
         // console.error("No flashcards found for this deck");
          return;
        }
        setFlashcards(response.data);
      } catch (error) {
        //console.error("Error fetching flashcards:", error);
      }
    };
    fetchFlashcards();
  }, []);

  const createFlashcard = async () => {
    try {
      if (!isLoaded || !isSignedIn) {
        //console.error("User is not signed in or auth is not loaded");
        return;
      }
      const token = await getToken();
      const response = await axios.post("/api/flashcard",
        {
          question,
          answer,
          deckId
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setFlashcards((prev) => [...prev, response.data.flashcard]);
      setQuestion("");
      setAnswer("");
    } catch (error) {
      //console.error("Error creating flashcard:", error);
    }
  };

  const handleDeleteFlashcard = async (flashcardId: string) => {
    try {
      if (!isLoaded || !isSignedIn) {
        //console.error("User is not signed in or auth is not loaded");
        return;
      }
      const token = await getToken();
      await axios.delete(`/api/flashcard/${flashcardId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setFlashcards((prev) =>
        prev.filter((flashcard) => flashcard._id !== flashcardId)
      );
    } catch (error) {
      //console.error("Error deleting flashcard:", error);
    }
  };  

  const toggleCreateDeckModal = () => {
    document.getElementById("create-deck-modal")?.classList.toggle("hidden");
  };

  return (
    <div>
      <Navbar />
      <hr className="text-gray-300" />
      <div className="px-7 py-4">
        <div className="flex justify-between">
          <h1 className="font-semibold">Deck Name</h1>
          <div>
            <button
              onClick={toggleCreateDeckModal}
              className="bg-green-500 text-white p-1 rounded px-3 mr-2 cursor-pointer"
            >
              Create
            </button>
            <button className="bg-red-500 text-white p-1 rounded px-3 mr-2 cursor-pointer">
              Start
            </button>
          </div>
        </div>
        <div>
          <div className="mt-4 p-3 rounded flex flex-col border border-gray-500 bg-amber-100 hidden" id="create-deck-modal">
            <h1 className="font-bold text-center mb-2">Create Flashcard</h1>
              <input
                type="text"
                placeholder="Title"
                className=" rounded p-1 border border-gray-300"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <textarea
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                name=""
                id=""
                placeholder="Content"
                className="rounded p-1 border mt-2 h-32 resize-none border-gray-300"
              ></textarea>
              <button
              className="bg-green-500 text-white p-1 rounded px-3 mt-2 cursor-pointer"
              onClick={createFlashcard}
              >Submit</button>
            </div>
          
          {/* Flashcards */}
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4 ">
            {flashcards.map((flashcard, index)=>(
              <div
                key={index}
                className="bg-yellow-200 p-3 rounded relative max-h-52 min-h-52 overflow-y-scroll"
              >
                <h1 className="font-bold">{index + 1}. {flashcard.question}</h1>
                <p className="px-4 break-words">{flashcard.answer}</p>
                <div className="flex gap-2 absolute bottom-2 right-2">
                  <img src={edit} width={25} className="bg-white p-1 rounded" />
                  <img
                    src={deleteIcon}
                    width={25}
                    className="bg-white p-1 rounded hover:bg-red-500 cursor-pointer"
                    onClick={() => handleDeleteFlashcard(flashcard._id || "")}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
