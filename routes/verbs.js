const express = require('express');
const router = express.Router();
const Verb = require('../models/verbModel');

// GET all
router.get('/', async (req, res) => {
    try {
        const verbs = await Verb.find();
        res.json(verbs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET one
router.get('/:id', getVerb, (req, res) => {
    res.json(res.verb);
});

// Middleware to find a verb by the given :id
async function getVerb(req, res, next) {
    let verb;
    try {
        verb = await Verb.findById(req.params.id);
        if (verb === null) {
            return res.status(404).json({ message: `Verb with id: ${req.params.id} not found.` });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.verb = verb;
    next();
};

module.exports = router;