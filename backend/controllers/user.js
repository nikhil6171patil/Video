import { model } from "mongoose";
import User from '../model/user.js'
import httpStatus from "http-status"
import bcrypt  from "bcrypt"


export const register = async(req , res)=>{
    const {name, username, password} = req.body();
    try {
        const existingUser = await User.findOne({username});
        if (existingUser) {
            return res.status(httpStatus.FOUND).json({message:"User has allready exist"})
        }
        const hashPassword = await bcrypt.hash(password , 10 ); //saltRounds 
        const newUser = new User({
            name: name ,
            username : username,
            password: hashPassword
        }) 
        newUser.save();
        
        
    } catch (e) {
        console.log("register" + e); 
    }

}
