function wait(ms){
    return new Promise((resolve) => {
        setTimeout(resolve, ms)
    })
}
async function example(){
    console.log(1)
    await wait(2000)
    console.log(3)
}

example()
console.log(2)


// Promise

// pending - ще виконується
// fulfilled - отримали результат
// rejected - отримали помилку

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

function getProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
            // reject("database error")
        }, 1000) 
    })
}

async function showProducts(){
    const result = await getProducts()
    console.log(result)
}
// showProducts()

// then | catch

// getProducts()
//     .then((products) => {
//         console.log(products)
//     })
//     .catch((error) => {
//         console.log(error)
//     })