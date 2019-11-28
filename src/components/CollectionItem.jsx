import React from "react"; 
import styled from "styled-components"; 
import Button from "./Button.jsx";
import {useDispatch} from "react-redux"; 
import {addItemToCart} from "../redux/cart/cart.action.js"; 


const AddToCartButton = styled(Button)`
width: 50%;
opacity: 0.7;
position: absolute;
bottom:10%;
display:none;

`;

const Image = styled.div`
width: 100%;
height: 95%;
background-image:url(${(props) => props.imageUrl});
background-size: cover;
background-position: center;
margin-bottom: 5px;
`;

const Container = styled.div`
width: 20vw;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
position:relative;

&:hover  {

    ${AddToCartButton}{
        display:flex;
        border:none;
    }
    ${Image}
        {
            opacity:0.85;
        }  
}
`;



const Footer = styled.footer`
width: 100%;
height: 5%;
display: flex;
justify-content: space-between;
font-size: 18px;
`;

const Name = styled.span`
width: 90%;
margin-bottom: 15px;
`;

const Price = styled.span`
width: 10%;
`;




const  CollectionItem = (props) => {
const {item} = props; 
const dispatch = useDispatch(); 

const handleClick = e => {
    dispatch(addItemToCart(item));
};

return(
<Container>
    <Image imageUrl={item.imageUrl}/>
    <Footer>
        <Name>
            {item.name}
        </Name>
        <Price>
            {item.price}
        </Price>
    </Footer>
    <AddToCartButton isInverted onClick = {handleClick}>Add to Cart</AddToCartButton>
</Container>
);
}



export default CollectionItem; 