import mongoose from "mongoose";

const User = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default:'user',
    },
    point:{
        type:Number,
        default: 100,

    }
});

export default mongoose.model("Users", User);