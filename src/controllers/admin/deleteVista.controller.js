const { readData } = require("../../data");

module.exports = (req, res) => {
    const { id, name } = req.query;
    const products = readData();

    const productDestroy = products.find(p => p.id === +id)

    res.render('./admin/deleteProduct', { id, name })
}