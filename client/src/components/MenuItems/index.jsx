import React from "react"; 
import {useSelector} from "react-redux"; 
import {selectItems} from "../../redux/directory/directory.selector.js";
import {Row, Col} from "react-bootstrap";
import MenuItem from "../MenuItem"; 
import {Container} from "./style.jsx";

const MenuItems = (props) => {

    const itemsArr = useSelector(selectItems); 


    const displayMenuItems = () => {
        const tempArr = []; 
        
        itemsArr.map( (item , index) => {
         
          tempArr.push(
            item.size === "large" ?
                (<Col md="6" key={item.title} className="pl-0 pr-0">
                    <MenuItem key= {index} title= {item.title} imageUrl={item.imageUrl} routeUrl={item.routeUrl} size={item.size} />
                </Col>) :
                (<Col md="4" key={item.title} className="pl-0 pr-0">
                    <MenuItem key= {index} title= {item.title} imageUrl={item.imageUrl} routeUrl={item.routeUrl} size={item.size} />
                </Col>)

                
          );  
        } );         

         return tempArr;
    } 

    return (
        <Row as= {Container} {...props} className="ml-0 mr-0 mt-0 mt-md-n5" style={{maxWidth:"1500px"}}>
         
            {displayMenuItems()}
           
        </Row>
    ); 
}


export default MenuItems; 