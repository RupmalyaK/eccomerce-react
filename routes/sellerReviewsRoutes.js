import SellerReviewsModel from "../model/SellerReviewsModel";
import {calculateAverageRating,limitRequestFromTheUser} from "../controller/reviewController.js"
import {isAuthenticated} from "../controller/authController.js";



const sellerReviewsRoute = (app,admin) => {
    const db = admin.firestore();
    const routeString = "/api/seller/"
    app.route(routeString)
    .post(isAuthenticated,limitRequestFromTheUser,async(req,res) => {
        const {rating, text , sellerObjectId, userObjectId} = req.body; 
        if(typeof rating === undefined || rating > 5 || rating < 0)
            {
                res.status(400).json({error:"rating is not correct"});
                return; 
            }

        try{
            const userRef = await db.collection("users").doc(userObjectId)
            const userDoc = await userRef.get();
            const userData = userDoc.data(); 
            const {displayName, email} = userData;
           
            const sellerRef = await db.collection("users").doc(sellerObjectId)
            const sellerDoc = await sellerRef.get();
            if(sellerDoc.exists)
                {
                    const review = {user:{uid:userObjectId, displayName, email},rating,text}; 
                    let seller = await SellerReviewsModel.findOne({sellerId:sellerObjectId});
                    if(!seller)
                        {
                            await SellerReviewsModel.create({
                                sellerId:sellerObjectId,
                            });  
                            seller = await SellerReviewsModel.findOne({sellerId:sellerObjectId});        
                        }
                    
                    seller.reviews.forEach(review => { 
                        if(review.user.uid === userObjectId)
                            {
                                throw new Error("User already reviewed this product");
                            }
                    });
                seller.reviews.push(review);
                seller.averageRating = calculateAverageRating(seller.reviews);
                await seller.save();
                delete global.usersReviewing[userObjectId];
             
                res.status(200).send({operation:"success",reviewData:seller});     
                }

        }
        catch(error)
        {
            delete global.usersReviewing[userObjectId];
            console.log(error)
            res.status(400);
            next({error});
        }
    })
    .get(async(req, res) => {
        try{
            const allSellerReviews = await SellerReviewsModel.find({});
            res.status(200).json(allSellerReviews);
        }
        catch(error)
            {
                res.status(400);
                console.log(error)
                next({error});
            }
        

    });

    app.route(routeString + ":sellerid")
    .get(async (req,res) => {
        const {sellerid} = req.params;
        try{
            const sellerReviews = await SellerReviewsModel.findOne({sellerId:sellerid});
            res.status(200).json(sellerReviews ? sellerReviews : 
                {averageRating:0,
                 reviews:[],   
                }
            );
        }
        catch(error){
            res.status(400);
            console.log(error)
            next({error});
        }
    });
}


export default sellerReviewsRoute;


/*(async () => {
    await SellerReviewsModel.deleteMany({});
})();*/