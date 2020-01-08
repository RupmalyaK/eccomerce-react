import React, {useState} from "react"; 
import styled from "styled-components"; 
import CollectionItem from "./CollectionItem.jsx";
import {Row,Col} from "react-bootstrap";
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Container = styled.div`  

margin-bottom:10px;


box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
&:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}    
}
.arrow{
padding:-20px;
}
`;

const Title = styled.h1`
font-size: 28px;
margin-bottom: 25px;
text-align:center;

`;




const CollectionPreview = (props) => { 
    const {section} = props; 
    const [selected, setSelected] = useState(section.items[0]._id);
    const [itemCount, setItemCount] = useState(section.items.length-1);
    const Arrow = (icon) => {
      return (<FontAwesomeIcon icon={icon} style={{fontSize:"20px", color:"grey"}}/>);
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
    setSelected(key);
    };
return(
<Container  className="px-md-5" >
<Title>
       <Link to={"/shop/" + section.routeName} style={{color:"black"}}>{section.title}</Link>
</Title>
  <ScrollMenu data={displayCollectionItems()}
    arrowLeft={ArrowLeft}
    arrowRight={ArrowRight}
    onSelect={handleSelect}
    selected={selected}
    scrollToSelected={true}
    alignCenter={false}
    alignOnResize={true}
    clickWhenDrag={false}
    hideArrows={true}
    hideSingleArrow={true}
    wheel={false}
    itemCount={itemCount}
    dragging={true}
    translate= {0}
    transition= {0.3}

    arrowClass="arrow mx-md-2"
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






 