const express = require('express');
const router = express.Router();
const Noun = require('../models/nounModel');

// GET all
router.get('/', async (req, res) => {
    try {
        const nouns = await Noun.find();
        res.json(nouns);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one
router.get('/:id', getNoun, (req, res) => {
    res.json(res.noun);
});

// Middleware to find a noun by the given :id
async function getNoun(req, res, next) {
    let noun;
    try {
        noun = await Noun.findById(req.params.id);
        if (noun === null) {
            return res.status(404).json({ message: `Noun with id: ${req.params.id} not found.` });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.noun = noun;
    next();
};

module.exports = router;