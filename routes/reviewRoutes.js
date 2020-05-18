import CollectionsModel from "../model/CollectionsModel.js";
import mongoose from "mongoose";
import {calculateAverageRating} from "../controller/reviewController.js"
import {isAuthenticated} from "../controller/authController.js";

const reveiwRoutes = (app, admin) => {
    const db = admin.firestore();
    const routeString = "/api/collections/collection/item";

    app.route(routeString + "/review")
    .post(isAuthenticated,async (req, res, next) => {
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
                        console.log("DEBUG");
                        flag = true;
                        throw new Error("User already reviewed this product");
                    }
            });
            item.reviews.push(review);
            item.averageRating = calculateAverageRating(item.reviews); 
            const ret = await collection.save();
            res.status(200).send({operation:"success"});
        }
        catch(error)
            {
                res.status(400);
                console.log(error)
                next({error});
            }
       
    });


}

export default reveiwRoutes; 


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