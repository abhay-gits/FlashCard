import axios from "../utils/axios";
import { Navbar } from "../components/Navbar";
import { useEffect, useState } from "react";
import { useAuth } from "@clerk/clerk-react";
import { useParams } from "react-router-dom";
import deleteIcon from "../assets/delete.svg";

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
  const [loading, setLoading] = useState(true);

  const { deckId } = useParams();

  useEffect(() => {
    const fetchFlashcards = async () => {
      try {
        if (!isLoaded || !isSignedIn) {
          //console.error("User is not signed in or auth is not loaded");
          return;
        }
        const token = await getToken();
        const response = await axios.get(`/api/flashcard/${deckId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (!response.data) {
          // console.error("No flashcards found for this deck");
          return;
        }
        setFlashcards(response.data);
        setLoading(false);
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
      const response = await axios.post(
        "/api/flashcard",
        {
          question,
          answer,
          deckId,
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
    <div className="bg-white min-h-screen">
      <Navbar />
      <hr className="text-gray-300" />
      <div className="px-7 py-4">
        <div className="flex justify-end">
          <div>
            <button
              onClick={toggleCreateDeckModal}
              className="bg-green-500 text-white p-1 rounded-lg px-3 mr-2 cursor-pointer"
            >
              Create
            </button>
          </div>
        </div>
        <div>
          <div
            className="mt-4 p-3 rounded-2xl flex flex-col border border-gray-500 bg-green-50 hidden"
            id="create-deck-modal"
          >
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
              className="bg-green-500 text-white p-1 rounded-lg px-3 mt-2 cursor-pointer"
              onClick={createFlashcard}
            >
              Submit
            </button>
          </div>

          {/* Flashcards */}
          {loading ? (
            <div className="text-center text-gray-500 mt-20">
              <span className="loading loading-bars loading-xl"></span>
            </div>
          ) : flashcards.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              No flashcards available
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-4 ">
              {flashcards.map((flashcard, index) => (
                <div
                  key={index}
                  className="bg-green-400 relative p-2 rounded rounded-tl-2xl rounded-br-2xl max-h-52 min-h-52 "
                >
                  <div className="absolute bottom-2 right-2 z-10">
                    <img
                      src={deleteIcon}
                      width={25}
                      className="bg-white p-1 rounded hover:bg-red-500 cursor-pointer"
                      onClick={() => handleDeleteFlashcard(flashcard._id || "")}
                    />
                  </div>
                  <h1 className="font-bold text-black">
                    {index + 1}. {flashcard.question}
                  </h1 >
                  <div
                  id={`answer-${flashcard._id}`}
                    onClick={() => {
                      document
                      .getElementById(`answer-${flashcard._id}`)
                      ?.classList.toggle("blur-xs");
                    }}
                  className="overflow-y-auto h-40 blur-xs transition duration-100 bg-green-50 rounded-lg p-2 mt-2">
                  <p
                    className="px-4 break-words whitespace-pre-line cursor-grab "
                    >
                    {flashcard.answer}
                  </p>
                    </div>
                  
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
