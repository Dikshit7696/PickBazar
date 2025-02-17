import { allproducts, createproduct, deleteproduct, findproductbyId, updateproduct } from "../controller/productcontroller.js"
import express from "express";
import { uploadSingleImage } from "../utilities/multer.js";

const router=express.Router();
router.post("createproduct",uploadSingleImage.single('image'),createproduct)
router.put("updateproduct",uploadSingleImage.single('imahe'),updateproduct)
router.get("findproductbyId/:id",findproductbyId)
router.get("allproducts",allproducts)
router.delete("deleteproduct",deleteproduct)
export default router;