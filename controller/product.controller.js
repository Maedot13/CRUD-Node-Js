const Product=require('../model/product.model.js');

const getProducts= async (req,res)=>{

     try{
        const products=await Product.find({});
        res.status(200).json({
            products
        })
    }catch{
        res.status(500).json({message: Error.message});
    }
}

const getProduct=async (req,res)=>{
     try{
    const {id} = req.params;
    const product= await Product.findById(id);
    res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const creatProduct= async (req,res)=>{
     try{
        const product= await Product.create(req.body);
        console.log(product);
        res.status(200).json(product);
    }catch(error){
        res.status(500).json({message: error.message});
    }
}

const updateProduct= async (req,res)=>{
     try{
    const {id} = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body);

    if(!product){
      return  res.status(404).json({message:"no such type of product"});
    }

    const updateProduct= await Product.findById(id);
    res.status(200).json(updateProduct);
}catch(error){
    res.status(500).json({message:error.message});
}
}

const deleteProduct= async(req,res)=>{
    try{
    const {id}= req.params;
    const product= await Product.findByIdAndDelete(id);

    if(!product){
       return res.status(404).json({message:"does not exist this product"});
    }

    res.status(200).json({message:"The product is deleted succesfully"});
    }catch(error){
        res.status(500).json({error:error.message});
    }
}

module.exports={
    getProducts,
    getProduct,
    creatProduct,
    updateProduct,
    deleteProduct
}