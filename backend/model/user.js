import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    userId : { type:Number ,required:true},
    userName : { type:String , required:true , unique:true},
    password :{ type: String , required: true },
    Tocken :{ type: String}  // login etc
})

const User = mongoose.Model( "User" , userSchema);

export { User } ;