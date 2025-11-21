const notes = [];

/**
 * @description Returns all notes
 * @param {object} req - Express request object 
 * @param {object} res - Express response object
 * @returns {object} JSON response with success flag and array of notes
 */
const getAllNotes = (req, res) => {
    return res.status(200).json({ success: true, data: notes });
};

module.exports = { getAllNotes };
