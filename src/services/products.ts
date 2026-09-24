
import { createProduct, findProductById, findProductByTitle, getAllProducts } from "../repositories/products.js";
import type { CreateProductRequest } from "../transport/dto/requests.js"


export function getProducts(take: number) {
    return getAllProducts(take)
}

export function findProduct(id: number) {
    return findProductById(id)
}

export function createNewProduct(data: CreateProductRequest) {
    let { title, price, description } = data;

    if(findProductByTitle(title)) {
        return null;
    }

    let products = getAllProducts();
    let product = {
        id: products.length + 1,
        title: title,
        price: price,
        description: description
    };

    return createProduct(product);
}