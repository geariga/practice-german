const mongoose = require('mongoose');

const nounSchema = new mongoose.Schema({
    noun: {
        type: String,
        required: true
    },
    plural: {
        type: String, 
        required: true
    },
    nounEng: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Noun', nounSchema);