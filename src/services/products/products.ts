import type { ProductRepository } from "../../domain/product/repository.js";
import type { CreateProductInput } from "./products.types.js";

export function createProductService(repository: ProductRepository) {
    function getProducts(take?: number) {
        return repository.getAllProducts(take)
    }
    
    function findProduct(id: number) {
        return repository.findProductById(id)
    }
    
    function createNewProduct(data: CreateProductInput) {
        let { title, price, description } = data;

        if(repository.findProductByTitle(title)) {
            return null;
        }
        
        let products = repository.getAllProducts();
        let product = {
            id: products.length + 1,
            title: title,
            price: price,
            description: description
        };
        
        return repository.createProduct(product);
    }
    return {getProducts, findProduct, createNewProduct}
}