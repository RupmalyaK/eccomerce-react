import CollectionsModel from "../model/CollectionsModel.js";
import {checkIfAuthenticated} from "../controller/authController.js";
import {searchItemsByName, sortByPrice, sortByName} from "../controller/collectionsController.js";

const collectionsRoutesCreator = (app) => {
const routeString = "/api/collections";    
app.route(routeString)
.get(async (req, res, next) => {

   try{
    const dataObj = await CollectionsModel.find({});
     const newDataObj = {};
     dataObj.forEach(collection => {
         const {_id, title , routeName , numberOfIems, items} = collection;
         newDataObj[title.toLowerCase()] = {_id, title , routeName , numberOfIems, items}; 
     });
    res.status(200).send(newDataObj );
    }
    catch(error)
     {
        res.status(400);
        next(error);  
     }   
})
.post(async (req, res, next) => {
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


app.route(routeString + "/autocomplete")
.get(async(req, res, next) => {
    const {searchString} = req.query; 
    try {
            const items = await searchItemsByName(CollectionsModel , searchString);
            items.splice(9,items.length - 1); 
            res.status(200).json(items); 
        }
    catch(error)
        {
            res.status(400);
            next(error); 
        }    
});

app.route(routeString + "/itemName")
.get(async(req, res, next) => {
    const {searchString, isSplice, sortBy, isAsc,priceMin, priceMax,categories, isFeatured} = req.query;  
    try{
         let items = await searchItemsByName({CollectionsModel, searchString, categories, priceMin, priceMax, isFeatured});
         if(isSplice)
            {
                items.splice(9,items.length - 1); 
            }
            switch(sortBy)
                {
                    case "price":
                        sortByPrice(items , isAsc); 
                        break;
                    case "name":
                            sortByName(items, isAsc)
                            break;            
                    default: 
                        if(isAsc === "false")
                            {
                              items.reverse();  
                            } 
                        break;    
                }
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
