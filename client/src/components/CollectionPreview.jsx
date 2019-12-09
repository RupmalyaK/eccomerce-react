import React from "react"; 
import styled from "styled-components"; 
import CollectionItem from "./CollectionItem.jsx";

const Container = styled.div`  
display: flex;
flex-direction: column;
margin-bottom: 30px;
@media screen and (max-width:800px)
{
    align-items:center;
}
`;

const Title = styled.h1`
font-size: 28px;
margin-bottom: 25px;
`;

const Preview = styled.div`
display: flex;
justify-content: space-between;
@media screen and (max-width:800px)
{
    display:grid;
    grid-template-columns: 1fr 1fr;
    grid-gap:15px;
}
`;

const CollectionPreview = (props) => { 
const {section} = props; 

const displayCollectionItem = () => {
    const itemsArr = section.items.map(
        (item) => {
            return (
                <CollectionItem key= {item.id} item={item}/>
            );
        }
    );
    return itemsArr;
}

return(
<Container>

    <Title>
        {section.title}
    </Title>
    <Preview>
        {displayCollectionItem()}
    </Preview>
</Container>
);
}



export default CollectionPreview; 