import mongoose from "mongoose";
import {reviewSchema} from "./CollectionsModel.js";

const Schema = mongoose.Schema;

const sellerReviewsSchema = new Schema({
    sellerId:{type:String,maxLength:32,required:true},
    averageRating:{type:Number,default:0} ,    
    reviews:{type:[reviewSchema], default:[]}
},{timestamps:{createdAt:true,updatedAt:true}});


export default mongoose.model("SellerReviews", sellerReviewsSchema);