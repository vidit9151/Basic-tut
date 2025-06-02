import mongoose from "mongoose";
import noteModel from "../models/note.model.js";

export const getAllNotes = async (req, res) => {
  try {
    const notes = await noteModel.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error("🔴 Error in getting all notes controller", error);
  }
};

export const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new noteModel({ title, content });
    const noteThatsCreated = await newNote.save();
    res.status(201).json({
      message: "New note successfully created",
      noteThatsCreated: newNote?.title,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error("🔴Error while creating the note ", error);
  }
};

export const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updatedNote = await noteModel.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
      },
      { new: true }
    );

    if (!updatedNote)
      return res.status(404).json({ message: "No such note was found " });

    res
      .status(200)
      .json({ message: "note updated successfully ", updatedNote });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error("🔴 Error in updating via update controller", error);
  }
};

export const deleteNote = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedNote = await noteModel.findByIdAndDelete(id);

    if (!deletedNote)
      return res.status(404).json({ message: "no such note found " });

    res.status(200).json({ message: "note deleted successfully", deletedNote });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
    console.error("🔴 Error in deleting note controller", error);
  }
};
