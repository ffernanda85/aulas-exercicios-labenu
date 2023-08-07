import express from "express"
import { ProductController } from "../controller/ProductController"

export const productRouter = express.Router()

const productController = new ProductController()

productRouter.get("/", productController.getProducts)
productRouter.post("/", productController.createProduct)
productRouter.put("/:id", productController.editProduct)
productRouter.delete("/:id", productController.deleteProduct)
