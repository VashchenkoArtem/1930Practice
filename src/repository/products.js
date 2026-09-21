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

export function getAll(take){
    if (!take) {
        return [...products]
    }
    return products.slice(0, take)
}

export function getById(productId){
    return products.find((product) => {
        return product.id == productId
    })
}

export function addProduct(product) {
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

export function getByName(productName){
    const isDuplicate = products.some((product) => {
        return product.title.toLowerCase() == productName.toLowerCase()
    })

    return isDublicate
}