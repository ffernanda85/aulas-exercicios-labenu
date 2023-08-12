import express from 'express'
import { AuthorController } from '../controller/AuthorsController'
import { AuthorBusiness } from '../business/AuthorBusiness'
import { AuthorDatabase } from '../database/AuthorDatabase'

export const authorsRouter = express.Router()
const authorController = new AuthorController(new AuthorBusiness(new AuthorDatabase()))

authorsRouter.get("/", authorController.getAuthor)