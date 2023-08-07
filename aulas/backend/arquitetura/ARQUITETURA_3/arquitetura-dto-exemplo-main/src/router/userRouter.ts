import express from "express"
import { UserController } from "../controller/UserController"

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/", userController.createUser)
userRouter.get("/", userController.getUsers)
userRouter.put("/:id", userController.editUser)
userRouter.delete("/:id", userController.deleteUser)
