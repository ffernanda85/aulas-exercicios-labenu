import express from 'express'
import { NewsController } from '../controller/NewsController'
import { NewsBusiness } from '../business/NewsBusiness'
import { NewsDatabase } from '../database/NewsDatabase'

export const newsRouter = express.Router()
const newsDatabase = new NewsDatabase()
const newsBusiness = new NewsBusiness(newsDatabase)
const newsController = new NewsController(newsBusiness)

newsRouter.get("/", newsController.getNews)
newsRouter.post("/", newsController.createNews)
newsRouter.put("/:id", newsController.editNews)
newsRouter.delete("/:id", newsController.deleteNews)