import express from "express"
import { deleteUser, getAllUsers, getUser, registerUser, updateUser } from "../controllers/userRoutes.js"

const userRoutes = express.Router()

userRoutes.post("/", registerUser)
userRoutes.get("/", getAllUsers)
userRoutes.get("/:user_id", getUser)
userRoutes.put("/:user_id", updateUser)
userRoutes.delete("/:user_id", deleteUser)

export default userRoutes