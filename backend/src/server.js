import express from "express";
import noteRouter from "./routes/notes.routes.js";

const app = express();

app.use("/api/notes", noteRouter);

app.listen(5001, () => {
  console.log("server chaalu at port 5001");
});
