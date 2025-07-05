const express=require('express');
const Product=('../model//product.model.js')
const router=express.Router();
const { getProducts,
     getProduct,
      creatProduct,
       updateProduct,
        deleteProduct } = require('../controller/product.controller');
//routes
router.get('/',getProducts);
router.get('/:id',getProduct);
router.post('/',creatProduct);
router.put('/:id',updateProduct);
router.delete('/:id',deleteProduct); 

module.exports=router;