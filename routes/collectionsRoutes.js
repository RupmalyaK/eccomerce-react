import CollectionsModel from "../model/CollectionsModel.js";
const collectionsRoutesCreator = (app) => {
const routeString = "/api/";    
app.route(routeString + "collections")
.get( async (req, res, next) => {

   try{
    const data = await CollectionsModel.find({});
    res.status(200).send({data});
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
}


export default collectionsRoutesCreator;
