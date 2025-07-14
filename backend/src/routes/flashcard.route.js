import express from 'express';
import { getFlashcard, postFlashcard, deleteFlashcard } from '../controllers/flashcard.controller.js';
const router = express.Router();

router.get('/:deckId', getFlashcard);
router.post('/', postFlashcard);
router.delete('/:flashcardId', deleteFlashcard);

export default router;