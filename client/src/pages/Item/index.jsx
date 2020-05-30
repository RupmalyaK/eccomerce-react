import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux"; 
import {selectIsFetchingCurrentItem, selectCurrentItem} from "../../redux/browse/browse.selector.js"; 
import {fetchCurrentItemAsync} from "../../redux/browse/browse.actions.js";
import {useParams} from "react-router-dom";
import LoadingSpinner from "../../components/LoadingSpinner";
import Product from "../../components/Product";


const ProductWithLoadingSpinner = LoadingSpinner(Product); 


const ItemPage = props => {
    const isFetchingCurrentItem = useSelector(selectIsFetchingCurrentItem); 
    const currentItem = useSelector(selectCurrentItem);
    const dispatch = useDispatch();
    const {itemid, type} = useParams();
    
   useEffect(() => {
       if(Object.keys(currentItem).length === 0 && currentItem.constructor === Object && !isFetchingCurrentItem)
        {
            dispatch(fetchCurrentItemAsync(itemid,type));
        }
    },[itemid,type]);
    if((Object.keys(currentItem).length === 0 && currentItem.constructor === Object) && !isFetchingCurrentItem)
        {
            return(<></>);
        }
    return (
        <div style={{marginTop:"100px"}}>
           <ProductWithLoadingSpinner isLoading={isFetchingCurrentItem} /> 
        </div>
    );
}


export default ItemPage; 