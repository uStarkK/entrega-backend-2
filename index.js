const Container = require("./class.js")
const products = new Container("./products.json")
const fs = require("fs")

async function getProducts(){
    const object1={
        name:"Fideos",
        price:20,
        thumbnail:"url.com/url"
    }
    const object2={
    nombre:"Guantes",
    price:25,
    thumbnail:"url.com/url"
    }
    const object3={
        name:"Camiseta",
        price:30,
        thumbnail:"url.com/url"
    }
    const object4={
        name:"Medias",
        price:10,
        thumbnail:"url.com/url"
    }

await products.save(object1)
await products.save(object2)
await products.save(object3)
await products.save(object4)
await products.getAll()
await products.getByid(2).then(id=>console.log(id))
await products.deleteById(4)
await products.deleteById(1)
await products.getAll()
await products.getByid(3).then(id=>console.log(id))
await products.getAll()

}

getProducts()