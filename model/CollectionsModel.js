import mongoose from "mongoose"; 


export const reviewSchema = new mongoose.Schema({
    user:
      {uid:{type:String,maxLength:32,required:true},
        displayName:{type:String,maxLength:32,required:true,trim:true},
        email:{type:String,maxLength:32,required:true}},
    text: {type:String,default:"",trim:true},
    rating:{type:Number,max:5,required:true}    
});

const offerSchema = new mongoose.Schema({
  isOneDayDelivery:{type:Boolean, default:false},
  isZeroEmi:{type:Boolean,default:false},
  isFreeShipping:{type:Boolean,default:false},
  isSameDayDelivery:{type:Boolean,default:false},
  isTwoDaysDelivery:{type:Boolean,default:false},
});


const itemSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true,maxLength:32},
    primaryImageUrl:{type:String, required:true,maxLength:32},
    secondaryImageUrls:{type:[String], default:[]},
    isFeatured:{type:Boolean, default:false},
    price:{type:Number, default:0.0, max:999999},
    offers:offerSchema,
    sizes:{type:[String],default:[]},
    reviews:{type:[reviewSchema],default:[]},
    viewsNumber:{type:Number,default:0},
    averageRating:{type:Number,default:0},
    sellerId:{type:String,maxLength:32,required:true}                           
},{timestamp:{createdAt:true,updatesAt:true}});

const collectionsSchema = new mongoose.Schema({
    title:{type:String,required:true,maxLength:32},
    routeName:{type:String,required:true,lowercase:true,maxLength:32},
    items:{ type: [itemSchema], default:[]},
    numberOfItems: {type:Number, default:0}
});


export default mongoose.model("Collections", collectionsSchema);


