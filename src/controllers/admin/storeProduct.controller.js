const { loadData, saveData } = require('../../data')
module.exports = (req, res) => {
    const { name, price, description } = req.body
    const products = loadData()
    const newId = products[products.length - 1].id + 1
    const newProduct = {
        id: newId,
        name: name ? name.trim() : "",
        price: +price,
        description: description ? description.trim() : "",
        image: "not-image.jpg"

    }

    products.push(newProduct)
    saveData(products)

    res.redirect(`/`)


}