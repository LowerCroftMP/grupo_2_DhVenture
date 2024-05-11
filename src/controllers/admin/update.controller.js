const { loadData, saveData } = require('../../database');
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
    const { id } = req.params;
    const { name, price, description, category } = req.body;
    const image = req.file;
    const products = loadData();
    const productMap = products.map((p) => {
        if (p.id === +id) {
            const productUptale = {
                ...p,
                name: name.trim(),
                price: +price,
                description: description.trim(),
                category: category.trim(),
                image: image ? image.filename : p.image,
            }
            if (image && image.filename) { 
                const pathFile = path.join(__dirname, `../../../public/images/${p.image}`);
                const exisFile = fs.existsSync; (pathFile)

                if (exisFile) {
                    fs.unlinkSync(pathFile);
                }
            }
            return productUptale
        }
        return p
    })
    saveData(productMap)
    res.redirect(`/productos/detalle/${id}`)
}