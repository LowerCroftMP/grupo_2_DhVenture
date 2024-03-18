const path=require('path')
let products=require("../../data/products.json")
const fs=require('fs')
module.exports=(req,res)=>{

    const {name,price,description}=req.body

    const newId=products[products.length-1].id+1
    const newProduct={
        id:newId,
        name,
        price,
        description,
        image:""
    }

    products=[...products,newProduct]

    products=JSON.stringify(products,null,3)
    const pathProducts=path.join(__dirname,"../../data/products.json")

    fs.writeFileSync(pathProducts,products,'utf-8')

    
}