import mongoose from "mongoose"
const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true,
        unique:true
    },
    Password:{
        type:String,
        require:true
    },
    // // Role:{
    // //     enum:["admin","customer","seller"],
    // //     default:"customer"
    // },,
    image:{type:String},
   
    otp:{type:Number},
    token:{type:String}

},{
    timestamps:true,
    versionKey:false
})
const usermodel=mongoose.model("userschema",userSchema)
export default usermodel;