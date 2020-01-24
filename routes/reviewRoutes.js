import CollectionsModel from "../model/CollectionsModel.js";
import mongoose from "mongoose";
import {calculateAverageRating} from "../controller/reviewController.js"
import {checkIfAuthenticated} from "../controller/authController.js";

const reveiwRoutesCreator = (app) => {
    const routeString = "/api/collections/collection/item";
    app.route(routeString + "/review")
    .post(async (req, res, next) => {
        const {rating, text , itemObjectId, itemType,  userObjectId} = req.body; 
        if(typeof rating === undefined || rating > 5 || rating < 0)
            {
                res.status(400).json({error:"rating is not correct"});
                return; 
            }
        try{
            const collection = await CollectionsModel.findOne({title:itemType});
            const item = collection.items.id(itemObjectId);
            const review = {user:userObjectId,rating,text};
            let flag = false;
            item.reviews.forEach(review => {
                if(review.user === userObjectId)
                    {
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
                res.status(200);
                next(error);
            }
       
    });


}

export default reveiwRoutesCreator; 


/**
 * itemType:"Sneakers"
 * text:"My reviews are awesome!"
 * userObjectId:dlwjco20RwgkxM8qskaGC89tVYm2
 * itemObjectId:5e15ef92a1d75b428c67ae7c
 */