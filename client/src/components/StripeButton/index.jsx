import React from "react"; 
import StripeCheckout from "react-stripe-checkout"; 
import axios from "axios";


const  StripeButton = (props) => {
const {price} = props; 
const centsPrice = price * 100; 
const publishableKey = "pk_test_qhHgNG3x3y8JTmQuCZG96jDu00Y43Njp5E";

const handleToken = async token => {
   try{ 
     await axios({
        url:"payment",
        method:"post",
        data:{
            amount:centsPrice,
            token,
            description:"P0213",
        }
    });
    alert("payment successful");
}
    catch(error)
        {
            alert("There is an issue with your payment"); 
        }
}


return(
    <StripeCheckout 
    label="Pay now"
    name="RupKart ltd"
    billindgAddress
    shippingAddress
    image="https://sendeyo.com/up/d/f3eb2117da"
    description={"Your total is $" + price}
    amount={centsPrice}
    panelLabel="Pay now"
    token={handleToken}
    stripeKey={publishableKey}
    />
);
}



export default StripeButton; 