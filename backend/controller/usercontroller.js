import bcrypt from "bcrypt";
import cloudinary from "cloudinary"
import nodemailer from "nodemailer";
import jwt from "jsonwebtoken";
import process from "node:process"
import usermodel from "../model/usermodel.js"
import fs from "fs";
import path from "path";

export const createuser= async(req,res)=>{
    try{
         const {Name,Email,Password,confirmpassword,Role}=req.body
         if(!Name||!Email||!Password||!confirmpassword){return res.status(400).json({message:"please provide the details"})}
         if(Password!==confirmpassword){return res.status(400).json({message:"password and confirm password dont match"})}
         const hashedpassword= bcrypt.hash(Password,10)
         const image=req.path ? req.file.path:null;
         let User=await usermodel.create({
            Name,Email,Password:hashedpassword,confirmpassword,Role
        })
        if(image){
            const result= await cloudinary.uploader.upload(image);
            User=await usermodel.findByIdAndUpdate(
            User._id,
            {image, image_url: result.secure_url },
             { new: true }
        )}
        return res.status(200).json({message:"user created",User})
    }catch(error){
        return res.status(400).json({message:error})
    }
}
export const login= async(req,res)=>{
    try{
        const {Email,Password}=req.body
        if(!Email||!Password){return res.status(400).json({message:"provide email and password"})}
        const User= await usermodel.findOne({Email})
        if(!Email){return res.status(400).json({message:"user not found"})}
        const match = bcrypt.compare(Password, User.Password);
        if(!match){
            console.log('wrong password')
            return res.status(400).json({message:"wrong password"})
        }
        const token= jwt.sign({id:User._id},process.env.JWT_SECRET,{
            expiresIn:process.env.JWT_EXPIRES_IN
        });
        
        res.status(200).json({message:"login successful",User,token});

    }catch(error){
        return res.status(400).json({message:error})
    }
}
export const updateuser = async (req,res) =>{
    try{
        const UserId=req.params.id
        const{name,email,phoneno,image}=req.body
        const existingUser=await usermodel.findById(UserId)
        if(!existingUser){return res.status(400).json({message:"user does not exist"}) }
        let newimagepath = existingUser.image;
        let updatedimage_url = existingUser.image_url;
        if (req.file) {
            newimagepath = req.file.path;
           const result = await  cloudinary.uploader.upload(newimagepath);
    
           updatedimage_url=result.secure_url;
       if (existingUser.image&& newimagepath) {
           const oldImagePath = path.join("images/", "..",existingUser.image);
           fs.unlink(oldImagePath, (err) => {
             console.log("image unlinked sucessfully");
             if (err) {
               console.error("Failed to delete old image:", err);
             }
           });
         }}
        const updateUser = await usermodel.findByIdAndUpdate(
            UserId,
            { $set: { name: name, email:email, phoneno:phoneno,image:newimagepath,image_url:updatedimage_url} },
            {new: true}
        );
        return res.status(200).json({message:'ok',updateUser})
    }
    catch(error){
        console.log(error);
        return res.status(400).json({message:"error"})
    }
}
export const deleteuser = async(req,res) =>{
    try{
        const UserId=req.params.id
        const User = await usermodel.findById(UserId);
        const deleteUser=await usermodel.findByIdAndDelete(User);
        return res.status(200).json({message:"success"})
    }
    catch(error){
        console.log(error);
        return res.status(400).json({message:"error"})
    }
}
export const userbyId = async(req,res) =>{
    try{
        const UserId = req.params.id
        const User = await usermodel.findById(UserId);
        res.status(200).json(User);
    }catch(err){
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export const Selector = async(req,res) =>{
    try{
        const{email,phoneno}=req.query;
        const query = {};
        if (email) query.email = email;
        if (phoneno) query.phoneno = phoneno;
        const user = await usermodel.find(query);
        res.status(200).json(user);
    }catch(err){
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
export const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const user = await usermodel.findOne({ email });
        if (!user) {return res.status(404).json({ message: 'User not found' });}
        const randomSixDigits =  Math.floor(100000 + Math.random() *900000);
        const updateUser= await usermodel.findByIdAndUpdate(
            user._id,
            {$set:{otp:randomSixDigits}},
            {new:true}
    );
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });
    const mailOptions = {
        from: {
            address: "hello@example.com",
            name: "Mailtrap Test"
        },
        to: "karamjot061@gmail.com", 
        subject: "Reset Password",
        text: `Your OTP code is ${updateUser.otp}`,
    };
    const info = await transport.sendMail(mailOptions);

    console.log("Email sent: ", info.messageId);
    return res.status(200).json({ message: "Email sent successfully!", info });
    } catch (error) {
        console.error('Error in forgotPassword:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

export const otpverify = async (req,res)=>{
   try{ const {email,otp}=req.body;
   if(!email || !otp){return res.status(400).json({message:"please provide email and otp"})}
    const user = await usermodel.findOne({email})
    if(!email){return res.status(400).json({message:"user not found"})}
    const expirytime= 3*60*1000;
    const currenttime = new Date();
    const otpGeneratedAt=new Date(user.updatedAt);
    const timeDifference = currenttime-otpGeneratedAt;
    if(timeDifference>expirytime){return res.status(400).json({message:"otp has expired"})};
    if(user.otp !== parseInt(otp)){return res.status(400).json({message:"opt didnt matched"})};
    return res.status(200).json({message:"otp verfied",user})

}catch(error){
    return res.status(400).json({message:"otp not verified",error})
   }
}
export const resetpassword = async(req,res) =>{
    try{
        const {email,password}=req.body;
        const user = await usermodel.findOne({email});
        if(!user){return res.status(400).json({message:"user not found"})};
        const hashedpassword = await bcrypt.hash(password,10);
        const updatedpassword= await usermodel.findByIdAndUpdate(
            user._id,
            {$set:{password:hashedpassword}},
            {new:true}
        )
        return res.status(200).json({message:"password updated"});
    }
    catch(error){
        console.log(error);
        return res.status(400).json({message:"failed to reset password"})
    }
}