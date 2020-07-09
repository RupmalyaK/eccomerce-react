import React, {useState} from "react"; 
import ScrollMenu from 'react-horizontal-scrolling-menu';
import {FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAngleLeft as faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {faAngleRight as faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import CollectionItem from "../CollectionItem";
import {Container,Title} from "./style.jsx";
import {Col} from "react-bootstrap";

import styled from "styled-components";




const CollectionPreview = (props) => { 
  const {section} = props; 
  const [selected, setSelected] = useState(section.items[0]._id);
  const [itemCount, setItemCount] = useState(section.items.length-1);
  
  const Arrow = (icon,className) => {
   
    return (
    <div className={className}>  
    <FontAwesomeIcon icon={icon}/>
    </div>);
  };


  const ArrowLeft = Arrow(faArrowLeft,"arrowLeft");
  const ArrowRight = Arrow(faArrowRight,"arrowRight");

  const displayCollectionItems = () => {
      const itemsArr = section.items.map(
          (item,index) => {
              return (
                  <div key= {index} style={{paddingLeft:"30px", paddingRight:"30px"}}>
                      <CollectionItem  key= {index} item={item} selected={selected}/>
                  </div> 
                  
             
              );
          }
      );
   
      return itemsArr;
  }
  
  const handleSelect = key => {
  setSelected(key);
  };
return(
<Container className="mb-5">
    <Title>
        <Link className="link" to={"/shop/" + section.routeName}>{section.title}</Link>
    </Title>
    <div>
        <ScrollMenu data={displayCollectionItems()}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          onSelect={handleSelect}
          selected={selected}
          scrollToSelected={true}
          alignCenter={true}
          alignOnResize={true}
          clickWhenDrag={true}
          hideArrows={true}
          hideSingleArrow={true}
          wheel={false}
          itemsCount={itemCount} 
          dragging={true}
          translate= {1}
          transition= {0.3}
          
          wrapperClass="slider-wrapper"
          arrowClass="arrow"
          itemStyle={{alignItems:"center"}}
          inertiaScrolling={true}
        />
    </div>
</Container>
);
}





















/**const CollectionPreview = (props) => { 
    const {section} = props; 
    const [selected, setSelected] = useState(section.items[0]._id);
    const [itemCount, setItemCount] = useState(section.items.length-1);
    const Arrow = (icon) => {
      return (<FontAwesomeIcon icon={icon}/>);
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
<Container className="mb-5">
<Title>
       <Link to={"/shop/" + section.routeName} style={{color:"black"}}>{section.title}</Link>
</Title>
  <div>
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
        arrowClass="arrow"
      />
  </div>
 
</Container>
);
}
*/

export default CollectionPreview; 






 