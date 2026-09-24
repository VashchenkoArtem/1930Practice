let name: string = "kirill"


// Array
const categories: number[] = [1, 2] 

// Object
const product: IProduct = {
    id: 1,
    title: "Hello",
    price: 50000
}

const product1: IProduct = {
    id: 2,
    title: "Bye bye",
    price: 1000
}

// Interface 

export interface IProduct {
    id: number,
    title: string,
    price?: number,
}

let firstName: any = 12312
firstName = "Artem"