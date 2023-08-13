import express from 'express'
import { AuthorController } from '../controller/AuthorsController'
import { AuthorBusiness } from '../business/AuthorBusiness'
import { AuthorDatabase } from '../database/AuthorDatabase'

export const authorRouter = express.Router()
const authorController = new AuthorController(new AuthorBusiness(new AuthorDatabase()))

authorRouter.get("/", authorController.getAuthors)