import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import {selectCartItems, selectCartItemsTotalPrice, selectBuyNowItem} from "../../redux/cart/cart.selector.js";
import {useParams} from "react-router-dom"; 
import CheckoutItem from "../../components/CheckoutItem";
import StripeCheckoutButton from "../../components/StripeButton";
import {Row,Col} from "react-bootstrap";
import {Container,CheckoutHeader,HeaderBlock,Total,TestWarning} from "./style.jsx";


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
        <CheckoutHeader as={Row}>
            <Col xs={2}>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
            </Col>
            <Col xs={2}>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
            </Col>
            <Col xs={2}>
                <HeaderBlock>
                    <span>Size</span>
                </HeaderBlock>
            </Col>   
            <Col xs={2}>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
            </Col> 
            <Col xs={2}>
                <span>Price</span>
            </Col>
            <Col xs={2}>
                <span>Remove</span>
            </Col>
    </CheckoutHeader>
    {isBuyNow === "true"? (buyNowItem ? (<CheckoutItem isBuyNow item={buyNowItem}></CheckoutItem>) : <></>): displayCheckoutItems() }
    <Total>TOTAL:${isBuyNow === "true"? (buyNowItem ? buyNowItem.total : 0) : total}</Total>
    <TestWarning>
        *Please use the following test credit card for payments*
        <br/>
        4242 4242 4242 4242 
        <br/>
        Expiry date:-any future date 
        <br/>
        CVV:- any three digit numbers
    </TestWarning>
    <StripeCheckoutButton price={isBuyNow === "true"? (buyNowItem ? buyNowItem.total : 0 ):  total} />
</Container>
);
}



export default Checkout; 


