const express = require('express');

const { 
    httpGetAllNotes, httpCreateNote, httpGetSpecificNote,
    httpUpdateNote, httpDeleteNote
} = require('./notes.controller');

const notesRouter = express.Router();

/**
 * @route GET /api/notes
 * @description Fetch all notes
 * @access Public
*/
notesRouter.get('/', httpGetAllNotes);

/**
 * @route POST /api/notes
 * @description Create note
 * @access Public 
*/
notesRouter.post('/', httpCreateNote);

/**
 * @route GET /api/note/:id
 * @description Get specific note by id
 * @access Public 
*/
notesRouter.get('/:id', httpGetSpecificNote);

/**
 * @route PATCH /api/note/:id
 * @description Update note
 * @access Public
 */
notesRouter.patch('/:id', httpUpdateNote);

/**
 * @route DELETE /api/note/:id
 * @description delete one note
 */
notesRouter.delete('/id', httpDeleteNote);

module.exports = notesRouter;
