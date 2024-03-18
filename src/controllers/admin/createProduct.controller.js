module.exports=(req,res)=>{
    const product=require("../../data/products.json")

    res.render(product)
}