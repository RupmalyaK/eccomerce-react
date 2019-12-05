const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path"); 
const Stripe = require("stripe");
const dotEnv = require("dotenv"); 

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
        app.use(express.static(path.join(___dirname, "client/build")));
        app.get('*', (req, res) => {
            res.sendFile(path.join(___dirname, "client/build" , "index.html"));
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

app.post("/payment" , (req, res) => { 
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





