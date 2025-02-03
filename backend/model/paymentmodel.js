import mongoose from "mongoose"
const paymentSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"order",
    },
    amount:Number,
    status:{
        type:String,
        enum:["Pending", "Completed", "Failed"],
        default:"Pending"
    },
    paymentMethod:{
        type:String,
        emun:["Credit Card", "PayPal", "Cash on Delivery"],
    }

},{
    timestamps:true,
    versionKey:false
})
const paymentmodel=mongoose.model("paymentSchema",paymentSchema)
export default paymentmodel