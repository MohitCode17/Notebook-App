import Note from "../models/notes.model.js";

// 👉 GET ALL NOTES CTRL
export const handleGetAllNotes = async (req, res) => {
  try {
    const notes = await Note.find({ createdBy: req.user.userId });
    res.render("notes", { notes, authenticated: req.isAuthenticated });
  } catch (error) {
    res.status(500).json({ msg: "Error fetching notes !!", error });
  }
};

// 👉 GET SINGLE NOTE BY ID CTRL
export const handleGetNoteById = async (req, res) => {};

// 👉 CREATE A NEW NOTE CTRL
export const handleCreateNote = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description)
      res.status(400).json({ msg: "All fields are required !!" });

    await Note.create({
      title,
      description,
      createdBy: req.user.userId,
    });

    res.redirect("/notes");
  } catch (error) {
    res.status(500).json({ msg: "Error creating notes !!", error });
  }
};

// 👉 DELETE NOTE CTRL
export const handleDeleteNote = async (req, res) => {};

// 👉 UPDATE NOTE CTRL
export const handleUpdateNote = async (req, res) => {};
