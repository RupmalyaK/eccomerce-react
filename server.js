import express from "express"; 
import cors from "cors";
import bodyParser from "body-parser"; 
import path from "path";
import Stripe from "stripe";
import dotEnv from "dotenv";

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
                console.log(err);
                res.status(500).send({"error":err});
                return;
            }
            res.status(200).send({"res":result}); 
    });
});




