const path = require('path');
const fs = require('fs');
const { readData, saveData } = require('../../data');

module.exports = (req, res) => {
    const { id } = req.params;
    const { name, price, description, category } = req.body;
    const image = req.file;
    const products = readData();
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
            if (image?.filename) { //
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