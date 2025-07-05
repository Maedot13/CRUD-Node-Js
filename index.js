const express = require('express')
const mongoose=require('mongoose')
const Product=require('./model/product.model.js');
const productRoutes=require('./routes/routes.js');
const app=express();
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}));

//router
app.use('/api/products',productRoutes);
app.get('/',(req,res)=>{
    res.send('<h1 style="color:red;">start</h1>');
})

// app.post('/api/product',async (req,res)=>{
//     try{
//         const product= await Product.create(req.body);
//         console.log(product);
//         res.status(200).json(product);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// })

// app.get('/api/products',async(req,res)=>{
//     try{
//         const products=await Product.find({});
//         res.status(200).json({
//             products
//         })
//     }catch{
//         res.status(500).json({message: Error.message});
//     }
// })

// //single data
// app.get('/api/product/:id',async (req,res)=>{
//     try{
//     const {id} = req.params;
//     const product= await Product.findById(id);
//     res.status(200).json(product);
//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// })
// //update a prodacut
// app.put('/api/product/:id',async (req,res) =>{
//     try{
//     const {id} = req.params;
//     const product = await Product.findByIdAndUpdate(id,req.body);

//     if(!product){
//       return  res.status(404).json({message:"no such type of product"});
//     }

//     const updateProduct= await Product.findById(id);
//     res.status(200).json(updateProduct);
// }catch(error){
//     res.status(500).json({message:error.message});
// }
// })

// app.delete('/api/product/:id',async(req,res)=>{
//     try{
//     const {id}= req.params;
//     const product= await Product.findByIdAndDelete(id);

//     if(!product){
//        return res.status(404).json({message:"does not exist this product"});
//     }

//     res.status(200).json({message:"The product is deleted succesfully"});
//     }catch(error){
//         res.status(500).json({error:error.message});
//     }
// })
mongoose.connect("mongodb://localhost:27017/Crud")
.then(()=>{
    console.log("DB conection");
app.listen(3000,()=>{
    console.log('connected');
})
    })
 .catch(()=>{
            console.log("DB conection fail");
 })



