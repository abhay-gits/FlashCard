import express from 'express';
import { getDeck, postDeck, updateDeck, deleteDeck } from '../controllers/deck.controller.js';
const router = express.Router();

router.get('/', getDeck);
router.post('/', postDeck);
router.put('/', updateDeck);
router.delete('/:id', deleteDeck);

export default router;