import { Router } from 'express';
import type { ProductHandler } from '../transport/handlers/products/products.types.js';


export function createProductRouter(handler: ProductHandler) {
    const productsRouter = Router()

    productsRouter.get('/', handler.getAllProducts);
    productsRouter.get('/:id', handler.getProductById);
    productsRouter.post('/', handler.createProduct);
    
    return productsRouter
}