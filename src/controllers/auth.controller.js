import cloudinary from "../lib/cloudinary.js";
import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";

import bcrypt from "bcryptjs";

export const signup= async (req,res)=>{
    const {fullName,email,password}=req.body 
    try{
            
        if(!password || !email || !fullName){
            return res.status(400).json({message:"All fields are required "})
        }

         if(password.length<6){
            return re.status(400).json({message:"Password must be atleast 6 characters"});
         }

         const user =await User.findOne({email});
         if(user) return res.status(400).json({message:"Email is already exists"});
         const salt= await bcrypt.genSalt(10); //.hash the password with the help of the salt

         const hashedPassword =await bcrypt.hash(password,salt);

         const newUser=new User ({
            fullName:fullName,
            email:email,
            password:hashedPassword,
         });

         if(newUser){
           //generate jwt token here 
            //for the space constraints we are creating in the lib folder  
        generateToken(newUser._id,res)
         await newUser.save();
          res.status(201).json({
            _id:newUser._id,
            fullName:newUser.fullName,
            email:newUser.email,
            profilePic:newUser.profilePic,
          });
         }else{
            res.status(400).json({message:"Invalid User data"});
         }

    }catch(error){
      console.log("Error in signup controller",error.message);
    }
};

export const login=async (req,res)=>{
  const {email,password}=req.body;
   try{
      const user=await User.findOne({email})
      if(!user){
        return res.status(400).json({message:"Invalid credentials"})
      }
     const isPasswordCorrect= await bcrypt.compare(password,user.password)

     if(!isPasswordCorrect){
      return res.status(400).json({message:"Invalid credentials"});
     }
     generateToken(user._id,res);
     res.status(200).json({
      _id:user._id,
      fullName:user.fullName,
       email:user.email
     })

   }catch(error){
    console.log("error in login credentials",error.message );
    res.status(500).json({message:"Internal server error"});
   }
};

export const logout=(req,res)=>{
   try{
     res.cookie("jwt","",{maxAge:0})
     res.status(200).json({message:"logout successfull"});
   }catch(error){
    console.log("Error in logout controller".error.message);
    res.status(500).json({message:"Internal server Error"});
   }
}

export const updateProfile=async (req,res)=>{
   res.send("update profile");
  try{
   const {profilePic}=req.body;
   const userId =req.user._id;
   if(!profilPic){
    return res.status(400).json({message:"Profile pic is required"});

   }
   const uploadResponse = await cloudinary.uploader.upload(profilePic);
    const updatedppofUser=await User.findById(userId,{profilePic:uploadResponse.secure_url},{new:true})//findOneAndUpdate( returns the document as it was before update was applied.if you set new:true, findOneAndUpdate() will instead give you the object after update was applied)
    res.status(200).json(updatedppofUser)
  }catch(error){
      console.log("error in update profile:",error);
      res.status(500).json({message:"Internal server error"});
  }
}


export const checkAuth =async (req,res)=>{
    try{
      res.status(200).json(req.user);
    }catch(error){
      console.log("Error in checkAuth controller",error.message);
      res.status(500).json({message: " please login to get the token and user details Internal Server Error  user is no longer logged in"});
    }
}