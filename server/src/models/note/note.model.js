const notes = require('./note.mongo');

const getAllNotes = async () => {
    return await notes.find(
        {},
        {
            '_id': 0,
            '__v': 0,
        }
    );
};

const createNote = async (note) => {
    return await notes.create({
        title: note.title,
        content: note.content,
        tags: note.tags  || []
    });
};

module.exports = { getAllNotes, createNote };
