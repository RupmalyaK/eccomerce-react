import React, {useState} from "react"; 
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectCurrentItem} from "../../redux/browse/browse.selector.js"; 
import {useSelector} from "react-redux"; 
import {Row} from "react-bootstrap";
import ReviewsAndRatings from "../ReviewsAndRatings";
import ProductLeftPanel from "../ProductLeftPanel";
import ProductRightPanel from "../ProductRightPanel";
import {Container} from "./style.jsx";


const Product = props => {
    const item = useSelector(selectCurrentItem); 
    const {_id,averageRating,reviews, type} = item;  
    const [selectedSize, setSelectedSize] = useState(item.sizes ? item.sizes[0] : null);
    const history = useHistory();
    const dispatch = useDispatch(); 

    if(Object.keys(item).length === 0)
        {
            return(<></>);
        }
    return(
        <Container> 
            <Row>
               <ProductLeftPanel/>
                <ProductRightPanel/>
             </Row>
             <hr/>
             <ReviewsAndRatings reviews={reviews} averageRating={averageRating} itemType={type} itemObjectId={_id}/>
        </Container>
    );
}

export default Product; 