import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";
import productmodel from "../model/productmodel.js";
export const createproduct=async(req,res)=>{
    try{
    const{Name,Description,Category,stock,Rating,Price}=req.body;
    if(!Name||!Description||!Category||!stock||!Rating||!Price){return res.status(400).json({message:"please provide product details"})}
    const image=req.path ? req.file.path:null;
    let product= await productmodel.create({
        Name,Description,Category,stock,Rating,Price
    })
    if(image){
        const result= await cloudinary.uploader.upload(image);
        product=await productmodel.findByIdAndUpdate(
        product._id,
        {image, image_url: result.secure_url },
         { new: true }
    )}
    return res.status(200).json({message:"product created",product})
}catch(error){
    return res.status(400).json({message:error})
}
}
export const updateproduct=async(req,res)=>{
    try{
        const productId=req.param._id
        const{Description,image,Price,stock,Rating}=req.body
        const existingproduct=await productmodel.find(productId)
        if(!existingproduct){return res.status(400).json({message:"product dont exist"})}
        let newimagepath = existingproduct.image;
        let updatedimage_url = existingproduct.image_url;
        if (req.file) {
            newimagepath = req.file.path;
           const result = await  cloudinary.uploader.upload(newimagepath);
    
           updatedimage_url=result.secure_url;
       if (existingproduct.image&& newimagepath) {
           const oldImagePath = path.join("images/", "..",existingproduct.image);
           fs.unlink(oldImagePath, (err) => {
             console.log("image unlinked sucessfully");
             if (err) {
               console.error("Failed to delete old image:", err);
             }
           });
         }}
        const updatedproduct=await productmodel.findByIdAndUpdate(
            productId,{
            $set:{Description,Price,stock,Rating,image:newimagepath,image_url:updatedimage_url},
            new:true
        })
        return res.status(200).json({message:"product updated",updatedproduct})
        
    }catch(error){
        return res.status(400).json({message:error})
    }
}
export const deleteproduct=async(req,res)=>{
    try{
        const productId=req.param.id
        const product=await productmodel.find(productId)
        if(!product){return res.status(400).json({message:"product not found"})}
        const deleteproduct=await productmodel.findByIdAndDelete(product)
        return res.status(200).json({message:"product deleted"})
    }catch(error){
        return res.status(400).json({message:error})
    }
}
export const findproductbyId=async(req,res)=>{
    try {
        const productId=req.param.id
        const product=await productmodel.findById(productId)
        return res.status(200).json({product})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
export const allproducts=async(req,res)=>{
    try {
        const product=await productmodel.find()
        return res.status(200).json({product})
    } catch (error) {
        return res.status(400).json({message:error})
    }
}
