const { getAllNotes, createNote } = require("../../models/note/note.model");

/**
 * @description Returns all notes
 * @returns {object} JSON response with success flag and array of notes
 */
const httpGetAllNotes = async (req, res) => {
    const notes = await getAllNotes();
    return res.status(200).json({ success: true, data: notes });
};

/**
 * @description Create new note 
 * @return {object} JSON response with success flag and newly created note
 */
const httpCreateNote = async (req, res) => {
    const note = req.body;
    if (!note?.title || note?.title?.trim() === '') {
        return res.status(400).json({ success: false, message: 'Title is required'});
    }
    if (!note?.content || note?.content?.trim() === '') {
        return res.status(400).json({ success: false, message: 'Content is required'});
    }

    try {
        const newNote = await createNote(note);
        return res.status(201).json({ success: true, message: 'Note created successfully!', data: newNote });
    } catch(error) {
        console.error('Something went wrong while creating note: ', error);
        return res.status(500).json({ success: false, message: 'Something went wrong!'});
    }
};

/**
 * @description Get a specific note by id
 * @return {object} JSON response with success flag and searched note
 */
const httpGetSpecificNote = (req, res) => {};

/**
 * @description Update note
 * @return {object} JSON response with success flag and updated note
 */
const httpUpdateNote = (req, res) => {};

/**
 * @description find and delete note by id
 * @return {object} JSON response with success flag
 */
const httpDeleteNote = (req, res) => {};

module.exports = { 
    httpGetAllNotes, httpCreateNote, httpGetSpecificNote,
    httpUpdateNote, httpDeleteNote
};
