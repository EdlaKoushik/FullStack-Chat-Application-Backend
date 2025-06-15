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
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax", // allow cross-site cookies in production
        secure: process.env.NODE_ENV === "production", // always secure in production
     });
     return token;
}