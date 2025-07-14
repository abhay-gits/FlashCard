import mongoose from 'mongoose';

const deckSchema = new mongoose.Schema({
    deck: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
})

const Deck = mongoose.model('Deck', deckSchema);
export default Deck;