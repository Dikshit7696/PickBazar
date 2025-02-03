import productmodel from "../model/productmodel.js";
import reviewmodel from "../model/reviewmodel.js";
import usermodel from "../model/usermodel.js";
export const createreview=async(req,res)=>{
    try {
        const{UserId,productId,rating,comment}=req.body
        if(!UserId){return res.status(400).json({message:"user not found"})}
        if(!productId){return res.status(400).json({message:"product not found"})}
        const review=await reviewmodel.create(
            {UserId,productId,rating,comment}
        )
        return res.status(200).json({message:"review added",review})

    } catch (error) {
        return res.status(400).json({message:error})
    }
}
export const updatereview=async(req,res)=>{
    try {
        const reviewId=req.param.id
        const {rating,comment}=req.body
        const updatedreview=await reviewmodel.findByIdAndUpdate(
            reviewId,
            {$set:{rating:rating,comment:comment}},
            {new:true}
        )
        return res.status(200).json({message:"review updated",updatedreview})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}