import type { Product } from "./entity.ts"

export interface ProductRepository {
    getAllProducts: (take?: number) => Product[],
    createProduct: (product: Product) => Promise<Product>,
    findProductById: (id: number) => Product | undefined
    findProductByTitle: (title: string) => Product | undefined
}