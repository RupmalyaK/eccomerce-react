import React from "react"; 
import styled from "styled-components"; 
import CollectionItem from "./collection-item.component.js";

const Container = styled.div`  
display: flex;
flex-direction: column;
margin-bottom: 30px;
`;

const Title = styled.h1`
font-size: 28px;
margin-bottom: 25px;
`;

const Preview = styled.div`
display: flex;
justify-content: space-between;
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