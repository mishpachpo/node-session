const ShoppingCart = require('../Model/ShoppingCart')
const User = require('../Model/User')
require('dotenv').config();
const jwt = require('jsonwebtoken');

const allShoppingCart = async (req, res) => {
    const shoppingCarts = await ShoppingCart.find().lean();
    if (!shoppingCarts || shoppingCarts.length === 0)
        return res.status(404).json({ message: 'No shopping cart found' });
    res.json(shoppingCarts);
};

const singleShoppingCart = async (req, res) => {
    const shoppingCart = await ShoppingCart.find({ user: req.user._id }).lean();
    if (!shoppingCart)
        return res.status(404).json({ message: 'Shopping cart not found' });
    res.json(shoppingCart);
};

const addShoppingCart = async (req, res) => {
    try {
        const { name, codeProduct, price, image, count } = req.body;
        const user = req.user?._id;

        if (!user) return res.status(401).json({ message: 'Unauthorized' });

        const existing = await ShoppingCart.findOne({ codeProduct, user }).lean();
        if (existing) {
            res.status(405).json({ message: 'Unauthorized' });
            // res.status(201).json(newCard1);
            return;
        }

        const newCard = await ShoppingCart.create({ name, codeProduct, price, image, count, user });
        res.status(201).json(newCard);
    } catch (err) {
        console.log("ERROR in addShoppingCart:", err);
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
const updateShoppingCart = async (req, res) => {
    const { codeProduct, count } = req.body;
    const shoppingCart = await ShoppingCart.findOne({ codeProduct });
    if (!shoppingCart)
        return res.status(404).json({ message: 'Shopping cart not found' });

    shoppingCart.count += Number(count);
    const updated = await shoppingCart.save();
    res.json(updated);
};
const updateShoppingCart1 = async (req, res) => {
    const { codeProduct, price, image, category, name } = req.body;
    const shoppingCart = await ShoppingCart.findOne({ codeProduct });
    if (!shoppingCart)
        return res.status(404).json({ message: "Shopping cart not found" });
    shoppingCart.price = price;
    shoppingCart.name = name;
    shoppingCart.category = category;
    shoppingCart.image = image;

    const updated = await shoppingCart.save();
    res.json(updated);
}

const deleteShoppingCart = async (req, res) => {
    const { id } = req.params;
    const shoppingCart = await ShoppingCart.findById(id);
    if (!shoppingCart)
        return res.status(404).json({ message: 'Not found' });

    await ShoppingCart.deleteOne({ _id: id });
    res.json({ message: `Product ${shoppingCart.name} deleted` });
};

module.exports = { allShoppingCart, singleShoppingCart, addShoppingCart, deleteShoppingCart, updateShoppingCart, updateShoppingCart1 };
