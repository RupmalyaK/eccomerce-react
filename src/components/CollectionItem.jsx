import React from "react"; 
import styled from "styled-components"; 

const Container = styled.div`
width: 20%;
display: flex;
flex-direction: column;
height: 350px;
align-items: center;
`;

const Image = styled.div`
width: 100%;
height: 95%;
background-image:url(${(props) => props.imageUrl});
background-size: cover;
background-position: center;
margin-bottom: 5px;
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
</Container>
);
}



export default CollectionItem; 