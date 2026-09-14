const express = require('express')

const HOST = 'localhost'
const PORT = 8000

const app = express()

const products = [
    {
        id: 0,
        title: 'keyboard',
        price: 450, 
        count: 10
    }, 
    {
        id: 1,
        title: 'mouse',
        price: 200,
        count: 10
    }
]

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

app.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`)
})