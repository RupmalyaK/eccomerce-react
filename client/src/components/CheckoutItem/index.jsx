import React from "react"; 
import {useDispatch} from "react-redux"; 
import {removeItemFromCartCompletely, removeItemFromCart, addItemToCart, addBuyNowItem, removeBuyNowItem} from "../../redux/cart/cart.action.js";
import {Row,Col} from "react-bootstrap";
import {Container,ImageContainer,Image,Name,Size,Quantity,Value,Price,RemoveButton,Arrow} from "./style.jsx"


const CheckoutItem = (props) => {  
const {isBuyNow} = props; 
const {primaryImageUrl , name,size, price, quantity, _id} = props.item; 
const dispatch = useDispatch(); 

const handleRemoveItem = e => {
  if(isBuyNow)
    {
      dispatch(removeBuyNowItem());
      return; 
    }
  dispatch(removeItemFromCart(_id));
};

const handleAddItemToCart = e => {
  if(isBuyNow)
    {
      dispatch(addBuyNowItem());
      return; 
    }
  dispatch(addItemToCart(props.item));
}

const handleRemoveCompletelyClick = e => {
dispatch(removeItemFromCartCompletely(_id)); 
}


return(
<Container as={Row}>
        <ImageContainer as={Col} xs={2}>
            <Image src={primaryImageUrl} alt="item"/>
        </ImageContainer>
        <Col xs={2}>
          <Name>
              {name}
          </Name>
      </Col>
      <Col xs={2}>
        <Size>
          {size}
        </Size>
      </Col>
      <Col xs={2}>
      <Quantity>
          <Arrow onClick = {handleRemoveItem}>&#10094;</Arrow>
            <Value>{quantity}</Value> 
              <Arrow onClick={handleAddItemToCart}>&#10095;</Arrow>
        </Quantity>
     </Col>
     <Col xs={2}>
      <Price>
            ${price}
        </Price>
     </Col>
     <Col xs={2}>
          <RemoveButton onClick={handleRemoveCompletelyClick}>
              &#10005;
          </RemoveButton>
      </Col>
</Container>
);
}



export default CheckoutItem; 


/**
 * const nameQuantityPriceStyle = {
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

const Size = styled.span`
width:23%;
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
 */





