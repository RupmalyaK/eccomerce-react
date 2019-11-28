import React from "react"; 
import styled from "styled-components"; 
import {useSelector, useDispatch} from "react-redux"; 
import {removeItemFromCartCompletely, removeItemFromCart, addItemToCart} from "../redux/cart/cart.action.js";


const nameQuantityPriceStyle = {
    "width":"23%",
}
const Container = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;

`;

const ImageContainer = styled.div`
width: 23%;
padding-right: 99px;
`;

const Image = styled.img`
width: 100%;
height: 100%;
`;



const Name = styled.span`
${nameQuantityPriceStyle}
`;


const Quantity = styled.span`
${nameQuantityPriceStyle};
display:flex;
`;

const Value = styled.span`
margin:0 10px;
padding-top:2px;
`;

const Price = styled.span`
${nameQuantityPriceStyle};
padding-left:10px;

`;

const RemoveButton = styled.span`
padding-left: 12px;
cursor: pointer;

`;

const Arrow = styled.div`
cursor:pointer;
`

const CheckoutItem = (props) => {
const {imageUrl , name, price, quantity, id} = props.item; 
const dispatch = useDispatch(); 

const handleRemoveItem = e => {
  dispatch(removeItemFromCart(id));
};

const handleAddItemToCart = e => {
  dispatch(addItemToCart(props.item));
}

const handleRemoveCompletelyClick = e => {
dispatch(removeItemFromCartCompletely(id)); 
}


return(
<Container>
      <ImageContainer>
          <Image src={imageUrl} alt="item"/>
      </ImageContainer>
      <Name>
          {name}
      </Name>
      <Quantity>
         <Arrow onClick = {handleRemoveItem}>&#10094;</Arrow>
           <Value>{quantity}</Value> 
            <Arrow onClick={handleAddItemToCart}>&#10095;</Arrow>
      </Quantity>
      <Price>
          ${price}
      </Price>
      <RemoveButton onClick={handleRemoveCompletelyClick}>
          &#10005;
      </RemoveButton>
</Container>
);
}



export default CheckoutItem; 





