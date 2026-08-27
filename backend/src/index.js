import express from "express"
import { setupDB } from "./db.js";
import dotenv from "dotenv"
import bookRoutes from "./routes/bookRoutes.js";
import cors from "cors"

dotenv.config()
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use(cors())

app.use("/api/books", bookRoutes)

setupDB().then(
  app.listen(port, () => {
  console.log(`App listening on port ${port}`);
}));
