import express from "express";
import {
  createNote,
  deleteNote,
  getAllNotes,
  updateNote,
  getNoteById,
} from "../controller/notes.controller.js";
const router = express.Router();

//fetch all notes
router.get("/", getAllNotes);
//get specific note
router.get("/:id", getNoteById);
//this will post a note on notes database
router.post("/", createNote);
//this will help when we would want to modify some note
router.put("/:id", updateNote);
//this will help deleteing some specific note
router.delete("/:id", deleteNote);

export default router;
