const express = require('express');

const { 
    getAllNotes 
} = require('./notes.controller');

const notesRouter = express.Router();

/**
 * @route GET /api/notes
 * @description Fetch all notes
 * @access Public
*/
notesRouter.get('/', getAllNotes);

module.exports = notesRouter;
