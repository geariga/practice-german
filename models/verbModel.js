const mongoose = require('mongoose');

const verbSchema = new mongoose.Schema({
    verb: {
        type: String,
        required: true
    },
    verbEng: {
        type: String,
        required: true
    },
    ich: {
        type: String,
        required: true
    },
    du: {
        type: String,
        required: true
    },
    ese: {
        type: String,
        required: true
    },
    wir: {
        type: String,
        required: true
    },
    ihr: {
        type: String,
        required: true
    },
    Sie: {
        type: String,
        required: true
    }    
});

module.exports = mongoose.model('Verb', verbSchema);