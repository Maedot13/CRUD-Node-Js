const mongoose= require("mongoose")

const productSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"please enter name"],
        },
        quantity:{
            type:Number,
            required:true,
            default:0,
        },
        company:{
            type:String,
            required:[true,"please enter company name"],
        },
        price:{
            type:Number,
            required:true,
            default:0,
        },
         image:{
            type:String,
            required:false
        }
    },
    {
        timeStamps:true,
    }
)

const Product=mongoose.model("Product",productSchema);

module.exports=Product