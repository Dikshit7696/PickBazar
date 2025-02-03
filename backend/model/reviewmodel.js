import mongoose from "mongoose";
const reviewSchema = new mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },  
    productId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"product"
    },
    rating:{
        type:Number,
        min:1,
        max:5
    },
    comment:{
        type:String
    }
},{
    timestamps:true,
    versionKey:false
})
const reviewmodel= mongoose.model("reviewSchema",reviewSchema)
export default reviewmodel