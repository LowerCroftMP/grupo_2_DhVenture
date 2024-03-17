const { readData } = require("../../data")

module.exports = (req,res)=> {
    const products = readData()
    res.render('./other/home', {products})
}