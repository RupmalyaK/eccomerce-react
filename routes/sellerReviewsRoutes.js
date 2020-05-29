import SellerReviewsModel from "../model/SellerReviewsModel";
import {calculateAverageRating,limitRequestFromTheUser} from "../controller/reviewController.js"
import {isAuthenticated} from "../controller/authController.js";
import SellerProfileReviews from "../client/src/components/SellerProfileReviews";


const sellerReviewsRoute = (app,admin) => {
    const routeString = "/api/seller/"
    app.use(routeString)
    .post(async(req,res) => {
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
           
            const sellerRef = await db.collection("users").doc(sellerObjectId)
            const sellerDoc = await sellerRef.get();
            if(sellerDoc.exists)
                {
                    const review = {user:{uid:userObjectId, displayName, email},rating,text}; 
                    const seller = await SellerReviewsModel.findOne({uid:sellerObjectId});
                    if(!seller)
                        {
                            await SellerProfileReviews.create({
                                uid:sellerObjectId,
                            });  
                            seller = await SellerReviewsModel.findOne({uid:sellerObjectId});        
                        }
                    
                    seller.reviews.forEach(review => { 
                        if(review.user.uid === userObjectId)
                            {
                                flag = true;
                                throw new Error("User already reviewed this product");
                            }
                    });
                seller.reviews.push(review);
                seller.averageRating = calculateAverageRating(seller.reviews);
                await seller.save();
                delete global.usersReviewing[userObjectId];
                res.status(200).send({operation:"success",reviews:item.reviews});     
                }

        }
        catch(error)
        {
            delete global.usersReviewing[userObjectId];
            res.status(400);
            console.log(error)
            next({error});
        }
    });
}


export default sellerReviewsRoute;