import CollectionsModel from "../model/CollectionsModel.js";
import ItemsNameModel from "../model/ItemesNameModel.js"; 
import {checkIfAuthenticated} from "../controller/authController.js";
const collectionsRoutesCreator = (app) => {
const routeString = "/api/collections/";    
app.route(routeString + "collection")
.post(async (req, res, next) => {
    const {title, routeName  } = req.body;
  
    if (title === undefined || routeName === undefined)
        {
            res.status(400).send({"error":"Need to have title and routeName in request body"});  
            return;  
        }
    try {
            const insertedData = await CollectionsModel.create({title, routeName})
            res.status(200).send({"message":"successfully created collection",data:insertedData});
        }
      catch(error)
        {
            res.status(400);
            next(error);  
        }  
})

app.route(routeString + "collection")
.get(async(req, res, next) => {
    const {title} = req.query; 
    if (typeof title !== "string")
        {
            res.status(400).json({"error":"type query must be passed"}); 
            return; 
        }
    try{
        const data = await CollectionsModel.find({title});
        res.status(200).json({...data});
       }
     catch(error)
        {
            res.status(400);
            next(error);  
        }  
})
app.route("/test")
.get( async (req, res) => {
    const itemsName = await ItemsNameModel.find({});
    res.status(200).json(itemsName);
});
}
//CollectionsModel.deleteMany({}, () => {}); ItemsNameModel.deleteMany({}, () => {});

export default collectionsRoutesCreator;
