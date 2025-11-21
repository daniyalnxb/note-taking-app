const express = require('express');

const api = express.Router();
const notesRouter = require('./notes/notes.route');

api.use('/notes', notesRouter);

module.exports = api;
