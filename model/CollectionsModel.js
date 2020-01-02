import mongoose from "mongoose"; 

const itemsSchema = new mongoose.Schema({
    _id: {type:mongoose.Schema.Types.ObjectId,
        default:mongoose.Types.ObjectId(),
    },
    name:String,
    primaryImageUrl:String,
    secondaryImageUrls:[String],
    isFeatured:{type : Boolean, default:false},
    dateCreated:{ type: Date, default: Date.now },
    price:{type:Number, default:0.0}
});

const collectionsSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    title:String,
    routeName:String,
    items:{ type: [itemsSchema], default:[]}
});

export default mongoose.model("Collections", collectionsSchema);


