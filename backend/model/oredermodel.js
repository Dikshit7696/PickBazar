import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId,
             ref: "User", 
             required: true },
    products: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, 
                    ref: "Product" },
        quantity: { type: Number,
                     required: true }
      }
    ],
    totalAmount: Number,
    status: { type: String,
                 enum: ["Pending", "Shipped", "Delivered", "Cancelled"],
                  default: "Pending" },
    createdAt: { type: Date, 
                default: Date.now }
  });
  const ordermodel =mongoose.model("OrderSchema",OrderSchema)
  export default ordermodel