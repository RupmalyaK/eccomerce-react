import React from "react";
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import {selectCurrentItem} from "../redux/browse/browse.selector.js"; 
import RatingsAndReviews from "../components/ReviewsAndRatings.jsx"; 
const Container = styled.div``;


const ItemPage = props => {
    const item = useSelector(selectCurrentItem); 

    return (
        <Container>

        </Container>
    );
}


export default ItemPage; 