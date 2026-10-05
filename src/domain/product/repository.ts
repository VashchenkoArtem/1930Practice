import type { Product } from "./entity.ts"

export interface CreateProductInput {
    name: string, 
    price: number,
    image: string,
    categoty: string
}

export interface ProductRepository {
    getAllProducts: (take?: number) => Promise<Product[]>,
    createProduct: (product: Product) => Promise<Product>,
    findProductById: (id: number) => Promise<Product | null>,
    findProductByTitle: (title: string) => Promise<Product | null>,
}