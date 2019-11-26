import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 


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
padding-left: 20px;

`;

const Price = styled.span`
${nameQuantityPriceStyle};
padding-left:10px;

`;

const RemoveButton = styled.span`
padding-left: 12px;
cursor: pointer;

`;

const CheckoutItem = (props) => {
const {imageUrl , name, price, quantity} = props.item; 

return(
<Container>
      <ImageContainer>
          <Image src={imageUrl} alt="item"/>
      </ImageContainer>
      <Name>
          {name}
      </Name>
      <Quantity>
          {quantity}
      </Quantity>
      <Price>
          ${price}
      </Price>
      <RemoveButton>
          &#10005;
      </RemoveButton>
</Container>
);
}



export default CheckoutItem; 





