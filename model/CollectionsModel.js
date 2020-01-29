import mongoose from "mongoose"; 


const reviewSchema = new mongoose.Schema({
    user:{
      uid:String,
      displayName:String,
      email:String
    },
    text: {
            type:String,
            default:"",
          },
     rating:Number,     
});

const itemsSchema = new mongoose.Schema({
    name:String,
    primaryImageUrl:String,
    secondaryImageUrls:[String],
    isFeatured:{type : Boolean, default:false},
    dateCreated:{ type: Date, default: Date.now },
    price:{type:Number, default:0.0},
    reviews:{
            type:[reviewSchema],
            default:[]
            },
    viewsNumber:{
               type:Number,
               default:0, 
                },
    averageRating:{
                     type:Number,
                     default:0,   
                   }                            
});

const collectionsSchema = new mongoose.Schema({

    title:String,
    routeName:String,
    items:{ type: [itemsSchema], default:[]},
    numberOfItems: {
                     type:Number,
                     default:0,
                   }
});


export default mongoose.model("Collections", collectionsSchema);


