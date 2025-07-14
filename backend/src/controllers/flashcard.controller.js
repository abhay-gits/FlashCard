import Flashcard from "../models/flashcard.model.js";

//getFlashcard
export const getFlashcard = async (req, res) => {
  const { deckId } = req.params;
  try {
    const flashcards = await Flashcard.find({ deckId });
    if (!flashcards) {
      return res.status(404).json({ message: "Flashcards not found" });
    }
    res.status(200).json(flashcards);
  } catch (error) {
    res.status(500).json({ message: "Error retrieving flashcards", error });
  }
};

//postFlashcard
export const postFlashcard = async (req, res) => {
  try {
    const { question, answer, deckId } = req.body;
    const newFlashcard = await Flashcard.create({ question, answer, deckId });
    res
      .status(201)
      .json({
        message: "Flashcard created successfully",
        flashcard: newFlashcard,
      });
  } catch (error) {
    res.status(500).json({ message: "Error creating flashcard", error });
  }
};

//deleteFlashcard
export const deleteFlashcard = async (req, res) => {
  const { flashcardId } = req.params;
  try {
    const flashcard = await Flashcard.findByIdAndDelete(flashcardId);
    if (!flashcard) {
      return res.status(404).json({ message: "Flashcard not found" });
    }
    res.status(200).json({ message: "Flashcard deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting flashcard", error });
  }
};
