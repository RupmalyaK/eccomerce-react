import React, {useState} from "react"; 
import ScrollMenu from 'react-horizontal-scrolling-menu';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import { faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import CollectionItem from "../CollectionItem";
import {Container,Title} from "./style.jsx";

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


export default CollectionPreview; 






 