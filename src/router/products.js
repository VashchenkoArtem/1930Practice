import { Router } from "express"

import { getAllProducts } from "../handler/products.js"


export const productsRouter = Router()

productsRouter.get('/products', getAllProducts)