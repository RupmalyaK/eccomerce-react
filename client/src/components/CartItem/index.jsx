import React from "react"; 
import {Container,Image,ItemDetail,Name,Price} from "./style.jsx";


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


