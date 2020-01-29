import mongoose from "mongoose"; 


const userSchema = new mongoose.Schema({
    createdAt:{
        type:Date,
        default:Date.now(),
    },
    displayName:String,
    email:String   
});

const UserModel = mongoose.model("users", userSchema);

export default UserModel; 