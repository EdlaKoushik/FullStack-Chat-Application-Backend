import cloudinary from "../lib/cloudinary.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const getUsersForSidebar = async(req,res)=>{
           try{
    
            const loggedInUserId=req.user._id;
            const filteredUsers=await User.find({_id:{$ne:loggedInUserId}}).select("-password")
           
             res.status(200).json(filteredUsers);
        }catch (error){
                 console.log("Error in getUsersForSidebar:",error.message);
                 res.status(500).json({error:"Internal server error "});    
           }

}
//for  messages 

export const getMessages = async(req,res)=>{
           try{
             const {id:userToChatId}= req.params
             const myid=req.user._id; //from the  User model
             const messages=await Message.find({

                //we can reterive the messages by using the user or the other person is the user 
                $or:[
                    {senderId:myid,receiverId:userToChatId},
                    {senderId:userToChatId,receiverId:myid}
                ]
             })

             res.status(200).json(messages)
        }catch (error){
                 console.log("Error in getMessages controller:",error.message);
                 res.status(500).json({error:"Internal server error "});    
           }

}


export const sendMessage=async (req,res)=>{
    try{
        const {text,image}=req.body;
        const {id:receiverId}=req.params;
        
        let imageUrl;
        if(image){
            //upload base4 image to cloudinary
            const uploadResponse =await cloudinary.uploader.upload(image);
            imageUrl=uploadResponse.secure_url;
        }
        const newMessage =new Message({
            senderId,
            receiverId,
            text,
            image:imageUrl,
        });
     await newMessage.save();
      //todo realtimefunctionality goes here=>socket.io
         res.status(201).json(newMessage);

    }catch(error){
        console.log("Error in sendMessage controller:", error.message);
        console.log("Error in sendMessage controller:",error.message);

    }
}