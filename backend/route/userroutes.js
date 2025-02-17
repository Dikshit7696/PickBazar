import express from "express";
import { createuser, login,forgotPassword,otpverify,resetpassword,updateuser,deleteuser, userbyId } from "../controller/usercontroller.js";
import { uploadSingleImage } from "../utilities/multer.js";
const router=express.Router()
router.post("/createuser",uploadSingleImage.single('image'),createuser)
router.post("/login",login)
router.post("/forgotpassword",forgotPassword)
router.post("/otpverify",otpverify)
router.post("/resetpassword",resetpassword)
router.put("/updateuser",updateuser)
router.delete("/deleteuser",deleteuser)
router.get("/userbyId/:id",userbyId)

export default router;