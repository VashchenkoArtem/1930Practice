const express = require('express')

const HOST = 'localhost'
const PORT = 8000

const app = express()

app.use(express.json())

let products = [
    {
        id: 1,
        title: 'keyboard',
        price: 450, 
        count: 10
    }, 
    {
        id: 2,
        title: 'mouse',
        price: 200,
        count: 10
    }
]

function addProduct(product) {
    return new Promise((resolve) => {
        setTimeout(() => {
            products = [
                ...products, 
                product
            ]
            resolve(product)
        }, 2000)
    })
}


app.get('/', (req, res) => {
    res.status(200).json("Hello World")
})

app.get('/products', (req, res) => {
    const { take } = req.query
    if (!take) {
        res.status(200).json(products)
        return 
    }
    const takeNumber = parseInt(take)
    if (!Number.isInteger(takeNumber) || takeNumber <= 0) {
        res.status(400).json({ 
            message: 'take must be a positive integer'
        })
        return
    }
    
    const selectedProducts = products.slice(0, takeNumber)
    return res.status(200).json(selectedProducts)
})

app.get(`/products/:id`, (req, res) => {
    const { id } = req.params
    const productId = parseInt(id)

    if(!Number.isInteger(productId) || productId < 0){
        res.status(400).json({
            message: 'product must be a positive integer'
        })
        return
    }
    
    const product = products.find((product) => {
        return product.id == productId
    })

    if (!product){
        res.status(404).json({
            message: 'product not found'
        })
        return
    }
    
    res.status(200).json(product)
})

app.post(`/products`, async (req, res) => {
    const { title, price, count } = req.body
    
    if(typeof title !== "string" || !title || !Number.isInteger(price) || price <= 0 || !count){
        res.status(422).json({
            message: "Validation error"
        })
    }
    const newProduct = {
        id: products.length + 1,
        title: title,
        price: price,
        count: count
    }
    try {
        const createdProduct = await addProduct(newProduct)
        res.status(201).json(createdProduct)
    } catch (error) {
        res.status(500).json({
            message: "Product was not created"
    })
    }
})


app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})
