const fs = require('fs')
const path = require('path')
const { loadData, saveData } = require('../../database')


module.exports = (req, res) => {
    const { id } = req.params;
    const products = loadData();

    const productFilter = products.filter(p => p.id !== +id)
    const productDelete = products.find(p => p.id === +id)

    const pathFile = path.join(__dirname, '../../../public/images/' + productDelete.image);
    const exisFile = fs.existsSync(pathFile);

    if (exisFile) {
        fs.unlinkSync(pathFile);
    }
    saveData(productFilter);

    res.redirect('/admin/lista-productos');

}