import mongoose from "mongoose";
const productSchema= new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Description:{
        type:String
    },
    Price:{
        type:Number,
        require:true
    },
    Category:{
        type:String,
        require:true
    },
    image:[
        String
    ],
    stock:{
        type:Number,
        default:0
    },
    Rating:{
        type:Number,
        default:0
    }
},{
    timestamps:true,
    versionKey:false
})
const productmodel= mongoose.model("productSchema",productSchema)
export default productmodel