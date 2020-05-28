import CollectionsModel from "../model/CollectionsModel.js";
import {calculateAverageRating,limitRequestFromTheUser} from "../controller/reviewController.js"
import {isAuthenticated} from "../controller/authController.js";

const reviewRoutes = (app, admin) => {
    const db = admin.firestore();
    const routeString = "/api/collections/collection/item";
    app.route(routeString + "/review")
    .post(isAuthenticated,limitRequestFromTheUser,async (req, res, next) => {
        const {rating, text , itemObjectId, itemType,  userObjectId} = req.body; 
        if(typeof rating === undefined || rating > 5 || rating < 0)
            {
                res.status(400).json({error:"rating is not correct"});
                return; 
            }
        try{
            const collection = await CollectionsModel.findOne({title:itemType});
            const item = collection.items.id(itemObjectId);
            const userRef = await db.collection("users").doc(userObjectId)
            const userDoc = await userRef.get();
            const {displayName, email} = userDoc.data(); 
            
            const review = {user:{uid:userObjectId, displayName, email},rating,text}; 
            let flag = false;
            item.reviews.forEach(review => { 
                
                if(review.user.uid === userObjectId)
                    {
                        flag = true;
                        throw new Error("User already reviewed this product");
                    }
            });
            item.reviews.push(review);
            item.averageRating = calculateAverageRating(item.reviews); 
            const ret = await collection.save();
            delete global.usersReviewing[userObjectId];
            res.status(200).send({operation:"success",reviews:item.reviews});
        
        }
        catch(error)
            {
                delete global.usersReviewing[userObjectId];
                res.status(400);
                console.log(error)
                next({error});
            }
       
    })
    .get(async(req,res,next) => {
        const {_id,type} = req.query;
    
        try{
            const collection = await CollectionsModel.findOne({title:type});
            const item = collection.items.id(_id);
            res.status(200).json({reviews:item.reviews});
        }
        catch(error)
            {
                res.status(400);
                next(error);
            }
    });
}


/*( async() => {
    const collections = await CollectionsModel.find({});
     collections.forEach(
         async (collection) => {
             collection.items.forEach(
                 async (item) => {
                     item.reviews = [];
                 }
             );
             await collection.save();
         }
     )
}
)();*/

export default reviewRoutes; 



/**
 * itemType:"Sneakers"
 * text:"My reviews are awesome!"
 * userObjectId:dlwjco20RwgkxM8qskaGC89tVYm2
 * itemObjectId:5e15ef92a1d75b428c67ae7c
 */

 /**
  * 0] {
[0]   email: 'rupzonthemove@gmail.com',
[0]   displayName: 'Rup',
[0]   createdAt: Timestamp { _seconds: 1575032950, _nanoseconds: 371000000 }
[0] }
  */