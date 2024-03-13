const fs = require('fs')
const path = require('path')
const { readData, saveData } = require('../../data')


module.exports = (req,res) => {
    const {id} = req.params;
    const products = readData();

    const productFilter = products.filter(p = p.id !== +id)
    const productDelete = products.find(p => p.id === +id)

    const pathFile = path.join(__dirname, '../../../public/images' + productDelete.image);
    const exisFile = fs.existsSync(pathFile);

    if (exisFile) {
        fs.unlinkSync(pathFile);
    }
    saveData(productFilter);

    res.redirect('/');

}