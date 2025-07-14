import mongoose from 'mongoose';

const flashcardSchema = new mongoose.Schema({
    deckId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Deck',
        required: true
    },
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
})

const Flashcard = mongoose.model('Flashcard', flashcardSchema);
export default Flashcard;