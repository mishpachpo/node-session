const Product = require('../Model/Product')
const allProduct = async (req, res) => {
    const products = await Product.find().lean()
    if (!products)
        return res.status(400).json({ message: 'no products found' })
    res.json(products)
}
const singleProduct = async (req, res) => {
    const { id } = req.params
    const product = await Product.findById(id).lean()
    if (!product)
        return res.status(400).json({ message: 'no product found' })
    res.json(product)
}
const addProduct = async (req, res) => {
    const { name, code, price, image, category } = req.body
    if (!name || !code || !price) {
        return res.status(400).json({ message: 'name and code and price are required' })
    }
    const find = await Product.findOne({ code: code }).lean()
    if (find)
        return res.status(400).json({ message: 'code is exist' })
    const product = await Product.create({ name, code, price, image, category })
    res.json(product)
}
const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product)
        return res.status(400).json({ message: "not found" });
    await Product.deleteOne({ _id: id });
    const reply = `name ${product.name} deleted`;
    res.json({ message: reply });
};
const updateProduct = async (req, res) => {
    const { name, code, price, image, category } = req.body
    const product = await Product.findOne({ code })


    if (!product)
        return res.status(400).json({ message: 'product not found' })


    product.name = name
    product.price = price
    product.image = image
    product.category = category

    const updateNow = await product.save()
    res.json(updateNow)

}
module.exports = { addProduct, allProduct, singleProduct, deleteProduct, updateProduct }