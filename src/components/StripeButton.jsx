import React from "react"; 
import styled from "styled-components"; 
import StripeCheckout from "react-stripe-checkout"; 


const Container = styled.div``;

const  StripeButton = (props) => {
const {price} = props; 
const centsPrice = price * 100; 
const publishableKey = "pk_test_qhHgNG3x3y8JTmQuCZG96jDu00Y43Njp5E";

const handleToken = token => {

    alert("Payment successful"); 
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
    panelLabel="pPay now"
    token={handleToken}
    stripeKey={publishableKey}
    />
);
}



export default StripeButton; 