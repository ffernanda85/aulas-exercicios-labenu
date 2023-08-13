import express from 'express'
import { AuthorController } from '../../controller/authors/AuthorsController'
import { AuthorBusiness } from '../../business/authors/AuthorBusiness'
import { AuthorDatabase } from '../../database/authors/AuthorDatabase'

export const authorRouter = express.Router()
const authorController = new AuthorController(new AuthorBusiness(new AuthorDatabase()))

authorRouter.get("/", authorController.getAuthors)