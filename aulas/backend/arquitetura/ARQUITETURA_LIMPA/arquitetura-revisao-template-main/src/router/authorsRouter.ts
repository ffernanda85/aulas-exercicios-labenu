import express from 'express'
import { AuthorController } from '../controller/AuthorsController'

export const authorsRouter = express.Router()
const authorController = new AuthorController()

authorsRouter.get("/", authorController.getAuthor)