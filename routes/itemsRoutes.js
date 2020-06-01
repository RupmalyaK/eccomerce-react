import CollectionsModel from "../model/CollectionsModel.js";
import { Mongoose, Collection } from "mongoose";
import {checkIfAuthenticated} from "../controller/authController.js";
const collectionsRoutesCreator = (app) => {
const routeString = "/api/collections/collection/";    
app.route(routeString + "items")
.post(async (req , res, next) => {
    const {collectionTitle,name, primaryImageUrl, isFeatured, price,offers,sizes,sellerId} = req.body; 
    if (typeof collectionTitle === "undefined" || typeof name === "undefined "|| typeof primaryImageUrl === "undefined" || typeof isFeatured === "undefined")
        {
            res.status(400).json({error: "all the required fields are not present"});
            return;
        }
   
    const newItem = {collectionTitle, name , primaryImageUrl , isFeatured, price,offers,sizes,sellerId};
    try {
        const collection = await CollectionsModel.findOne({title:collectionTitle});
        collection.items.push(newItem); 
        collection.items.numberOfItems = collection.items.length; 
        const updatedCollection = await collection.save();
        res.status(200).json(updatedCollection);
        }
     catch(error)
        { 
            res.status(400);
            next(error);
        }
});

app.route(routeString + "items/:title")
.get( async (req, res, next) => {
    const {title:collectionTitle} = req.params; 
    const {isFeatured,sellerid} = req.query;

    if(collectionTitle === "all")
        {
            if(isFeatured)
                {
                    try{
                    const collections = await CollectionsModel.find({})
                    const newObj = {}; 
                    collections.forEach(collection => {
                        const {title, routeName, items, _id} = collection; 
                        const featuredItems = items.filter(item => item.isFeatured);

                        newObj[title.toLowerCase()] = {_id, title,routeName,items:featuredItems}; 
                        return; 
                         });
                         res.status(200).json(newObj); 
                        return;  
                       }
                    catch(error)
                        {
                            res.status(400); 
                            next(error); 
                            return; 
                        }   

                }
          return;   
        }

    if (isFeatured)
        { 
            try{
                const collection = await CollectionsModel.findOne({title:collectionTitle}); 
                if (collection === null)
                    {
                        const error = new Error("Collection not present");
                        res.status(400);
                        next(error);
                        return; 
                    }
               
                if(!collection.items)
                    { 
                        const error = new Error("items does not present in the collection");
                        next(error);
                        return; 
                    }
                const featuredItemsArr = collection.items.filter(item => item.isFeatured);
                console.log(collection.title,featuredItemsArr);
                res.status(200).json({title:collection.title,featuredItems:featuredItemsArr});
            }
            catch(error)
            {
                res.status(400);
                next(error); 
            }  
            }
});

}


export default collectionsRoutesCreator;
