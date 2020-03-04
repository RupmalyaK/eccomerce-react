import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import {selectCartItems, selectCartItemsTotalPrice, selectBuyNowItem} from "../redux/cart/cart.selector.js";
import {useParams} from "react-router-dom"; 
import CheckoutItem from "../components/CheckoutItem.jsx";
import StripeCheckoutButton from "../components/StripeButton.jsx";

const Container = styled.div`
width: 70%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
width: 100%;
padding: 10px 0;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
text-transform: capitalize;
width: 23%;

&:last-child {
  width: 8%;
}
`;

const Total = styled.div`
margin-top: 30px;
margin-left: auto;
font-size: 36px;
`;

const TestWarning = styled.div`
text-align:center;
margin:40px 0px;
font-size:24px;
color:red;
`;

const Checkout = (props) => {
const cartItems = useSelector(selectCartItems);
const total = useSelector(selectCartItemsTotalPrice);  
const buyNowItem = useSelector(selectBuyNowItem); 
const {isBuyNow} = useParams(); 

const displayCheckoutItems = () => {
    const arr = cartItems.map((item) => {
        return (
            <CheckoutItem key={item.id} item={item}/>
        );
    });
    return arr; 
};

return(
<Container>
    <CheckoutHeader>
        <HeaderBlock>
            <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Remove</span>
        </HeaderBlock>
    </CheckoutHeader>
    {isBuyNow ? (buyNowItem ? (<CheckoutItem isBuyNow item={buyNowItem}></CheckoutItem>) : <></>): displayCheckoutItems() }
    <Total>TOTAL:${isBuyNow? (buyNowItem ? buyNowItem.price : 0) : total}</Total>
    <TestWarning>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 
        <br/>
        Expiry date:-any future date 
        <br/>
        CVV:- any three digit numbers
    </TestWarning>
    <StripeCheckoutButton price={isBuyNow? (buyNowItem ? buyNowItem.price : 0 ):  total} />
</Container>
);
}



export default Checkout; 



