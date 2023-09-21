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
    point:{
        type:Number,
        required:true,
    }
});

export default mongoose.model("Users", User);