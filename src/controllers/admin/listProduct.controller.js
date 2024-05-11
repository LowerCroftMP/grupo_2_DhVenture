const { loadData } = require("../../database")

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

module.exports = (req,res)=> {
    const products = loadData()
    res.render('./admin/listProduct', { 
        products,
        toThousand
    })
}