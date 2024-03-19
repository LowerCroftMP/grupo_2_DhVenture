module.exports = (req, res) => {
    const { id, name } = req.query;
    res.render('./admin/deleteProduct', { id, name })
}