import { getProductById, createProduct, getProducts } from "../service/products.js";

export function getAllProducts(req, res){
    const { take } = req.query
    const takeNumber = Number(take)
    if (!take){
        return res.status(200).json(getProducts())
    }
    if (!Number.isInteger(takeNumber) || takeNumber <= 0) {
        res.status(400).json({ 
            message: 'take must be a positive integer'
        })
        return
    }
    const products = getProducts(takeNumber)
    return res.status(200).json(products)
}