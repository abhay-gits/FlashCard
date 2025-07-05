//getFlashcard
export const getFlashcard = (req, res) => {
  try {
    res.status(200).json({ message: "Flashcards retrieved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving flashcards", error });
  }
}
//postFlashcard
export const postFlashcard = (req, res) => {
  try {
    const { question, answer } = req.body;
    res.status(201).json({ message: `Flashcard with question '${question}' created successfully` });
  } catch (error) {
    res.status(500).json({ message: "Error creating flashcard", error });
  }
}
//deleteFlashcard
export const deleteFlashcard = (req, res) => {
  try {
    res.status(200).json({ message: "Flashcard deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting flashcard", error });
  }
}