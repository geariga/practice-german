require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', (err) => console.error(err));
db.on('open', () => console.log('Database connection successful'));

app.use(express.json());

const phrasesRouter = require('./routes/phrases');
const verbsRouter = require('./routes/verbs');
const nounsRouter = require('./routes/nouns');
const adjectivesRouter = require('./routes/adjectives');

app.use('/phrases', phrasesRouter);
app.use('/verbs', verbsRouter);
app.use('/nouns', nounsRouter);
app.use('/adjectives', adjectivesRouter);

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));