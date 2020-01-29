import UserModel from "../model/User.js";


const UserRouteCreator = (app) => {
    const routeString = "/api/users/"; 
    app.route(routeString)
    .get(async(req, res, next) => {
        const users = await UserModel.find({});
        res.status(200).json(users);
    })

    .post(async(req, res, next) => {
        const {displayName, email} = req.body; 
        try {
                const data = await UserModel.create({displayName, email});  
                res.status(200).json(data); 
            }
      catch(error)
            {
               res.status(400);
               next(error); 
            }
    });
}

export default UserRouteCreator; 