import express from "express"; 
import cors from "cors";
import bodyParser from "body-parser"; 
import path from "path";
import Stripe from "stripe";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import collectionsRoutes from "./routes/collectionsRoutes.js";
import collectionRoutes from "./routes/collectionRoutes.js";
import itemsRoutes from "./routes/itemsRoutes.js";
import admin from "firebase-admin";
import secrets from "./secrets.js"

admin.initializeApp({
    credential: admin.credential.cert(secrets),
    databaseURL: 'https://react-rupkart-d6edf.firebaseio.com'
  });


if(process.env.NODE_ENV !== "production")
    {
        dotEnv.config(); 
    }

const app = express(); 
const port = process.env.PORT || 5000; 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":true}));
app.use(cors());

if(process.env.NODE_ENV ==="production")
    {
        app.use(express.static(path.join(__dirname, "client/build")));

        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, "client/build" , "index.html"));
        });
    }

app.listen(port , err => {
    if(err)
        {
            throw err; 
        }
     console.log("server running on port ", + port);     
});  

(async () => {
    try {
    await mongoose.connect(process.env.MONGODB_URL, {useNewUrlParser: true, useUnifiedTopology: true, dbName: "snatchkart-db"});
    const db = mongoose.connection; 
    db.on("error", err => {
        console.log(error);
    });
    }
    catch(error)
        {
            console.log("MONGODB ERROR: ",error);
        }
})();

collectionsRoutes(app); 
collectionRoutes(app);
itemsRoutes(app);

const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

const test = app.post("/payment" , (req, res) => { 
    const body = {
        source:req.body.token.id,
        amount:req.body.amount,
        description:req.body.description,
        currency:"usd",
    }

    stripe.charges.create(body, (err , result) => {
        if (err)
            {
                console.error(err);
                res.status(500).send({"error":err});
                return;
            }
            res.status(200).send({"res":result}); 
    });
});




