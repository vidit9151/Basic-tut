import express from "express";
import noteRouter from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();

connectDB();

/*middle ware to access json files*/ app.use(express.json());

app.use("/api/notes", noteRouter);

app.listen(port, () => {
  console.log("🔱 server chaalu at port :", port);
});
