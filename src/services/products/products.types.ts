import type { Product } from "../../domain/product/entity.js";

export interface CreateProductInput {
    title: string;
    price: number;
    description: string;
}

export interface ProductService {
    getProducts: (take?: number) => Product[];
    findProduct: (id: number) => Product | undefined,
    createNewProduct: ( data: CreateProductInput) => Promise<Product> | null,
}