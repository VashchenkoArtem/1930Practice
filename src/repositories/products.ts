import type { ProductResponse } from "../transport/dto/responses.ts"

let products = [
    {
        id: 1,
        title: 'mouse',
        price: 123,
        description: 'Good mouse'
    },
    {
        id: 2,
        title:'keyboard',
        price: 1234,
        description: 'Excellent keyboard'
    }
]

export function getAllProducts(take: number){
    if(!take){
        return [
            ...products
        ]
    } 
    return products.slice(0, take)
}

export function createProduct(product: ProductResponse){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            products = [...products, product]
            resolve(product)
        }, 1000 )})
}
export function findProductById(id: number){
    return products.find((product) => {return product["id"] == id})
}

export function findProductByTitle(title: string) {
    return products.find((product) => {return product["title"] == title})
}