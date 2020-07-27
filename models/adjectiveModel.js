const mongoose = require('mongoose');

const adjectiveSchema = new mongoose.Schema({
    adjective: {
        type: String,
        required: true
    },
    comparative: {
        type: String,
        required: true
    },
    superlative: {
        type: String,
        required: true
    },
    adjectiveEng: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model("Adjective", adjectiveSchema);