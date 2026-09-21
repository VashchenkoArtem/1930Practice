import {getAll, getById, addProduct, getByName } from "../repository/products.js";

export function getProducts(take){
    return getAll(take);
}

export function getProductById(productId){
    return getById(productId);
}

export async function createProduct(product){
    const duplicate = getByName(product.title);
    if(duplicate){
        return null;
    }
    const products = getProducts();
    const newProduct = {
        id: products.length + 1,
        title: title,
        price: price,
        count: count
    }
    return await addProduct(newProduct);
}