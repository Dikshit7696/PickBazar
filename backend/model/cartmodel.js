import mongoose from "mongoose";
const cartSchema= new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        require:true
    },
    products: [
          {
            productId: { type: mongoose.Schema.Types.ObjectId, 
                        ref: "Product" },
            quantity: { type: Number,
                         required: true }
          }]
})
const cartmodel=mongoose.model("cartSchema",cartSchema)
export default cartmodel