const express = require('express');
const router = express.Router();
const Phrase = require('../models/phraseModel');

// GET all
router.get('/', async (req, res) => {
    try {
        const phrases = await Phrase.find();
        res.json(phrases);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one
router.get('/:id', getPhrase, (req, res) => {
    res.json(res.phrase);
});

// Middleware to find a phrase by the given :id
async function getPhrase(req, res, next) {
    let phrase;
    try {
        phrase = await Phrase.findById(req.params.id);
        if (phrase === null) {
            return res.status(404).json({ message: `Phrase with id: ${req.params.id} not found.` });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.phrase = phrase;
    next();
};

module.exports = router;