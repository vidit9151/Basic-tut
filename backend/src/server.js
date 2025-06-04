import express from "express";
import noteRouter from "./routes/notes.routes.js";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import { rateLimiter } from "./middleware/rateLimiter.js";

dotenv.config();
const port = process.env.PORT || 5001;
const app = express();

app.use(rateLimiter);

/*middle ware to access json files*/ app.use(express.json());

app.use("/api/notes", noteRouter);
connectDB().then(() =>
  app.listen(port, () => {
    console.log("🔱 server chaalu at port :", port);
  })
);
