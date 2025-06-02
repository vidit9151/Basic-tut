import express from "express";
import noteRouter from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
connectDB();
app.use("/api/notes", noteRouter);

app.listen(5001, () => {
  console.log("server chaalu at port 5001");
});
