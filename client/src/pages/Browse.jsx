import React, {useEffect} from "react"; 
import {useSelector, useDispatch} from "react-redux"; 
import {fetchItemsAsync} from "../redux/browse/browse.actions.js";
import {selectItems} from "../redux/browse/browse.selector.js";
import styled from "styled-components";
import {Row,Col,Container as BContainer} from "react-bootstrap"
import axios from "axios"; 
import BrowseItem from "../components/BrowseItem";
import SortBy from "../components/SortBy.jsx";
import AdvanceSearch from "../components/AdvanceSearch.jsx";

const Container = styled.div`
   display:flex;
    justify-content:space-between;
`;



const Browse = props => {

    const items = useSelector(selectItems);
    const dispatch = useDispatch(); 

    const displayBrowseItems = () => {
        const browseItemsArr = items.map(item => {
            return (<BrowseItem key={item._id} item={item} />);
        }); 
        return browseItemsArr;
        }

    return (
        <Container style={{marginTop:"90px", marginLeft:"10px", marginRight:"50px", overflow:"hidden"}}>
        <AdvanceSearch />
        <div  style={{ width:"70%"}}>
             <SortBy />
             <Row>
                {displayBrowseItems()}
             </Row>                    
        </div>   
        </Container>     
    );
}

export default Browse;