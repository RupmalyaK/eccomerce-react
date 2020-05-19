import React from "react"; 
import styled from "styled-components"; 

const Container = styled.div`
width: 100%;
display: flex;
height: 80px;
margin-bottom: 15px;
`;

const Image = styled.img`
width: 30%;
`;

const ItemDetail = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 10px 20px;
`;

const Name = styled.span`
font-size: 16px;
`;

const Price = styled.span`
`;

const CartItem = (props) => {
const {imageUrl , name, price, quantity} = props; 
return(
<Container>
        <Image src= {imageUrl} alt="item-img"/>
        <ItemDetail>
            <Name>{name}</Name>
            <Price> {quantity} X ${price}</Price>
        </ItemDetail>
</Container>
);
}



export default CartItem; 


