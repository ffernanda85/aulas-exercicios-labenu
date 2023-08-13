import express from "express";
import cors from 'cors'
import { newsRouter } from "./router/news/newsRouter";
import { authorRouter } from "./router/authors/authorRouter";

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => {
    console.log(`Servidor está rodando na porta ${3003}`)
})

app.use("/news", newsRouter)
app.use("/authors", authorRouter)