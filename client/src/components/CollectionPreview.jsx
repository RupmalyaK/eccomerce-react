import React, {useState} from "react"; 
import styled from "styled-components"; 
import CollectionItem from "./CollectionItem.jsx";
import {Row,Col} from "react-bootstrap";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`  

margin-bottom:10px;


box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
&:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}    
}
`;

const Title = styled.h1`
font-size: 28px;
margin-bottom: 25px;
text-align:center;

`;




const CollectionPreview = (props) => { 
    const {section} = props; 

    const [selected, setSelected] = useState(section.items[0].id);
    const [itemCount, setItemCount] = useState(section.items.length-1);
    const Arrow = (icon) => {
      return (<FontAwesomeIcon icon={icon} style={{margin:"20px", fontSize:"30px"}}/>);
    };

  
    const ArrowLeft = Arrow(faArrowLeft);
    const ArrowRight = Arrow(faArrowRight);

    const displayCollectionItems = () => {
        const itemsArr = section.items.map(
            (item) => {
                return (
                  //<Col lg={{offset:0}}>
                    <CollectionItem key= {item.name} item={item} selected={selected}/>
                  //</Col> 
                );
            }
        );
        return itemsArr;
    }

    const handleSelect = key => {
      console.log(`onSelect: ${key}`);
    setSelected(key);
    };
return(
<Container  className="" >
<Title>
        {section.title}
</Title>
  <ScrollMenu data={displayCollectionItems()}
    arrowLeft={ArrowLeft}
    arrowRight={ArrowRight}
    onSelect={handleSelect}
    selected={selected}
    scrollToSelected={true}
    alignCenter={false}
    clickWhenDrag={false}
    hideSingleArrow={true}
    wheel={false}
    itemCount={itemCount}
    dragging={true}
    translate= {0}
    transition= {0.3}
  />
</Container>
);
}



/**  <Title>
        {section.title}
    </Title>
        <Row className="preview-row">
            {displayCollectionItem()}
        <h1 className="shadow-effect"></h1>
        </Row>
     */
export default CollectionPreview; 






 