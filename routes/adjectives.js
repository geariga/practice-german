const express = require('express');
const router = express.Router();
const Adjective = require('../models/adjectiveModel');

// GET all
router.get('/', async (req, res) => {
    try {
        const adjectives = await Adjective.find();
        res.json(adjectives);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one
router.get('/:id', getAdjective, (req, res) => {
    res.json(res.adjective);
});

// Middleware to find a adjective by the given :id
async function getAdjective(req, res, next) {
    let adjective;
    try {
        adjective = await Adjective.findById(req.params.id);
        if (adjective === null) {
            return res.status(404).json({ message: `Adjective with id: ${req.params.id} not found.` });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.adjective = adjective;
    next();
};

module.exports = router;

