const mongoose = require('mongoose');

const phraseSchema = new mongoose.Schema({
    // Only the phrase and translation are required, the responses are optional
    phrase: {
        type: String,
        required: true
    },
    phraseEng: {
        type: String,
        required: true
    },
    res1: {
        type: String,
        required: false
    },
    res1Eng: {
        type: String,
        required: false
    },
    res2: {
        type: String,
        required: false
    },
    res2Eng: {
        type: String,
        required: false
    },
    res3: {
        type: String,
        required: false
    },
    res3Eng: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('Phrase', phraseSchema);