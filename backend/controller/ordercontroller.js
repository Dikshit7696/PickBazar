import ordermodel from "../model/ordermodel.js";
export const createorder=async(req,res)=>{
try {
    const {UserId}=req.params.id
} catch (error) {
    return res.status(400).json({message:error})
}
}