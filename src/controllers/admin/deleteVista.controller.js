module.exports = (req, res) => {
    const { id, title } = req.query;

    res.render('./admin/deleteProduct', { id, title })
}