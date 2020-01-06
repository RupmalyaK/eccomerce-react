import CollectionsModel from "../model/CollectionsModel.js";
import {checkIfAuthenticated} from "../controller/authController.js";
const collectionsRoutesCreator = (app) => {
const routeString = "/api/";    
app.route(routeString + "collections")
.get(async (req, res, next) => {

   try{
    const dataObj = await CollectionsModel.find({});
     const newDataObj = {};
     dataObj.forEach(collection => {
         const {title , routeName , items , _id} = collection;
         newDataObj[title.toLowerCase()] = {_id, title, routeName , items}; 
     });
    res.status(200).send(newDataObj );
    }
    catch(error)
     {
        res.status(400);
        next(error);  
     }   
})
.post(checkIfAuthenticated,async (req, res, next) => {
    const {collections} = req.body;
    if (!collections)
        {
            res.status(400).send({"error":"need to include collections array"}); 
            return; 
        }
    try{
            const insertedData = CollectionsModel.create(collections);
            res.status(200).send({insertedData});
       }
    catch(error)
        {
            res.status(400);
            next(error);  
        }   
})
;


app.route(routeString + "collections/autocomplete")
.get(async(req, res, next) => {
    const {string} = req.query; 
    try{
            const collections = await CollectionsModel.find({});
            const items = {};
            collections.forEach(collection => {
                const {_id, title, routeName} = collection; 
                const collectionItems = collection.items.filter(item => item.name.match(new RegExp(string, 'i')));
                items[title.toLowerCase()] = {_id, title, routeName , items:collectionItems};
            });
            res.status(200).json(items);
       }
    catch(error)
       {
           res.status(400);
           next(error); 
       }
});
}


export default collectionsRoutesCreator;
