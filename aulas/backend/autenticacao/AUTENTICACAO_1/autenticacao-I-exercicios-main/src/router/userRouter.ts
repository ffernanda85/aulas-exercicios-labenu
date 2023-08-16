import express from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../database/UserDatabase"

export const userRouter = express.Router()

const userController = new UserController(
    new UserBusiness(
        new UserDatabase()
    )
)

userRouter.get("/", userController.getUsers)

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)