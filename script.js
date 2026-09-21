import express from "express"
import { productsRouter } from "./src/router/products.js"


const HOST = 'localhost'
const PORT = 8000

const app = express()

app.use(express.json())

app.use(productsRouter)

// let products = [
//     {
//         id: 1,
//         title: 'keyboard',
//         price: 450, 
//         count: 10
//     }, 
//     {
//         id: 2,
//         title: 'mouse',
//         price: 200,
//         count: 10
//     }
// ]




// app.get('/', (req, res) => {
//     res.status(200).json("Hello World")
// })


// app.get(`/products/:id`, (req, res) => {
//     const { id } = req.params
//     const productId = parseInt(id)

//     if(!Number.isInteger(productId) || productId < 0){
//         res.status(400).json({
//             message: 'product must be a positive integer'
//         })
//         return
//     }
    
//     const product = products.find((product) => {
//         return product.id == productId
//     })

//     if (!product){
//         res.status(404).json({
//             message: 'product not found'
//         })
//         return
//     }
    
//     res.status(200).json(product)
// })

// app.post(`/products`, async (req, res) => {
//     const { title, price, count } = req.body
    
//     if(typeof title !== "string" || !title || !Number.isInteger(price) || price <= 0 || !count){
//         res.status(422).json({
//             message: "Validation error"
//         })
//     }

//     try {
//         const createdProduct = await addProduct(newProduct)
//         res.status(201).json(createdProduct)
//     } catch (error) {
//         res.status(500).json({
//             message: "Product was not created"
//     })
//     }
// })


app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})


// 1. HTTP Request
// 2. Router
// 3. Handler
// 4. Service
// 5. Repository