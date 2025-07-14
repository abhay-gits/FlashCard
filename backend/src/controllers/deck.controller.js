import Deck from "../models/deck.model.js";
import { getAuth } from "@clerk/express";

//getDeck
export const getDeck = async (req, res) => {
  try {
    const { userId } = getAuth(req);
    const decks = await Deck.find({userId}).select("deck");
    if (!decks || decks.length === 0) {
      return res.status(200).json({ message: "No topics found", decks: [] });
    }
    res.status(200).json({ decks });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving topics", error });
  }
};

//postDeck
export const postDeck = async (req, res) => {
  try {
    const { deckName } = req.body;
    const { userId } = getAuth(req);
    const existingDeck = await Deck.findOne({ deck: deckName, userId });
    if (existingDeck) {
      return res
        .status(400)
        .json({ message: `deck '${deckName}' already exists` });
    }
    // Create a new Deck
    const newDeck = await Deck.create({ 
      deck: deckName,
      userId: userId
     });
    res.status(201).json(newDeck);
  } catch (error) {
    res.status(500).json({ message: "Error creating topic", error });
  }
};

//updateDeck
export const updateDeck = async (req, res) => {
    const { deckId } = req.body;
    const { deckName } = req.body;
    try{
        if(!deckId && !deckName) {
            return res.status(400).json({ message: "Topic ID and Name is required" });
        }
        const topic = await Deck.findByIdAndUpdate(deckId, {deck: deckName} , { new: true });
        res.status(200).json({ message: `Topic updated successfully`, topic });
    } catch (error) {
        return res.status(500).json({ message: "Error updating topic", error });
    }
}

//deleteDeck
export const deleteDeck = async (req, res) => {
  const deckId = req.params.id;
  try {
    const deletedTopic = await Deck.findByIdAndDelete(deckId);
    res.status(200).json({ message: "Topic deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting topic", error });
  }
};
