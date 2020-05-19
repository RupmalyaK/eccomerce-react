import React from "react"; 
import {useSelector, useDispatch} from "react-redux"; 
import {selectItems} from "../redux/browse/browse.selector.js";
import styled from "styled-components";
import {Row,Col,Container as BContainer} from "react-bootstrap";
import {selectNumberOfItems} from "../redux/browse/browse.selector.js"
import BrowseItem from "../components/BrowseItem";
import SortBy from "../components/SortBy";
import AdvanceSearch from "../components/AdvanceSearch";



const Container = styled.div`
   display:flex;
    justify-content:space-between;
`;



const Browse = props => {

    const items = useSelector(selectItems);
    const noOfItems = useSelector(selectNumberOfItems);
    const dispatch = useDispatch();
    

    const displayBrowseItems = () => {
        const browseItemsArr = items.map(item => {
            return (<BrowseItem as={Col} key={item._id} item={item} />);
        }); 
        return browseItemsArr;
        }

    return (
        <>
        <Container style={{marginTop:"90px", marginLeft:"10px", marginRight:"50px", overflow:"hidden"}}>
        <AdvanceSearch />
        <div  style={{ width:"70%"}}>
             <SortBy />
             <Row>
             <i className="d-block p-5" as={Col}>Displaying {items.length} of {noOfItems} items</i>  
                {displayBrowseItems()}
             </Row>                    
        </div> 
        </Container>
        </>     
    );
}

export default Browse;