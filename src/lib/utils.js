//to generate a token we need to have the jwt secret

import  jwt from "jsonwebtoken"
import dotenv from "dotenv";
dotenv.config()
export const generateToken=(userId,res)=>{
    const token =jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"7d"
    });
    //we need to send the jwt in the cookies;
     res.cookie("jwt",token,{
        maxAge:7*24*60*60*1000, //MS
        httpOnly:true, // prevent XSS attacks cross-site scripting attacks
        sameSite:"strict", //CSRF attacks cross-site request forgery attacks
        secure:process.env.NODE_ENV !=="development" // this says in production secure will be true
     });
     return token;
}