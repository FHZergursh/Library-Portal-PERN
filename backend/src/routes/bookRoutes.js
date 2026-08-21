import express from "express"
import {addBook, deleteBook, getAllBooks, getBook, helloWorld, updateBook} from "../controllers/bookControllers.js"

const bookRoutes = express.Router()

bookRoutes.get("/test", helloWorld)
bookRoutes.get("/", getAllBooks)
bookRoutes.get("/:id", getBook)
bookRoutes.post("/", addBook)
bookRoutes.put("/:id", updateBook)
bookRoutes.delete("/:id", deleteBook)



export default bookRoutes