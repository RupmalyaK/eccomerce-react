import mongoose from "mongoose"; 

const itemsNameSchema = new mongoose.Schema({
    name:String,
});

export default mongoose.model("ItemsName", itemsNameSchema);