const express=require('express')
const router=express.Router()
const productcontroller=require('../Controller/SoppingCartController')
const tokenJWT=require('../Middleware/tokenJWT')
router.get('/',tokenJWT,productcontroller.allShoppingCart)
router.get('/singel',tokenJWT,productcontroller.singleShoppingCart)
router.post('/',tokenJWT,productcontroller.addShoppingCart)
router.put('/',productcontroller.updateShoppingCart)
router.put('/a',tokenJWT,productcontroller.updateShoppingCart1)
router.delete('/:id',productcontroller.deleteShoppingCart)

module.exports=router