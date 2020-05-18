import React, {useEffect} from "react";
import styled from "styled-components"; 
import {useSelector, useDispatch} from "react-redux"; 
import {selectIsFetchingCurrentItem, selectCurrentItem} from "../redux/browse/browse.selector.js"; 
import {fetchCurrentItemAsync} from "../redux/browse/browse.actions.js";
import {useParams} from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import Product from "../components/Product.jsx";


const ProductWithLoadingSpinner = LoadingSpinner(Product); 
const Container = styled.div`
margin-top:100px;
`;


const ItemPage = props => {
    const isFetchingCurrentItem = useSelector(selectIsFetchingCurrentItem); 
    const currentItem = useSelector(selectCurrentItem);
    const dispatch = useDispatch();
    const {itemid, type} = useParams();

   useEffect(() => {
       if(Object.keys(currentItem).length === 0 && currentItem.constructor === Object)
        {
            dispatch(fetchCurrentItemAsync(itemid,type));
        }
    },[itemid,type]);
    return (
        <Container>
           <ProductWithLoadingSpinner isLoading={isFetchingCurrentItem} /> 
        </Container>
    );
}


export default ItemPage; 