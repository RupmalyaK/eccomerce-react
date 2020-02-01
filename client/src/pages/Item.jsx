import React, {useEffect} from "react";
import styled from "styled-components"; 
import {useSelector, useDispatch} from "react-redux"; 
import {selectIsFetchingCurrentItem} from "../redux/browse/browse.selector.js"; 
import {fetchCurrentItemAsync} from "../redux/browse/browse.actions.js";
import {Route,useParams,useHistory} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import Product from "../components/Product.jsx";
import RatingsAndReviews from "../components/ReviewsAndRatings.jsx"; 

const ProductWithLoadingSpinner = LoadingSpinner(Product); 
const Container = styled.div`
margin-top:100px;
`;


const ItemPage = props => {
    const isFetchingCurrentItem = useSelector(selectIsFetchingCurrentItem); 
    const dispatch = useDispatch();
    const {itemid, type} = useParams();
    const history = useHistory();
    
    
   useEffect(() => {
        dispatch(fetchCurrentItemAsync(itemid,type));
    },[itemid,type]);
    return (
        <Container>
           <ProductWithLoadingSpinner isLoading={isFetchingCurrentItem} /> 
        </Container>
    );
}


export default ItemPage; 