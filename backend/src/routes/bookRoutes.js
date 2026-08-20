import express from "express"
import {helloWorld} from "../controllers/bookControllers.js"

const bookRoutes = express.Router()

bookRoutes.get("/", helloWorld)

export default bookRoutes