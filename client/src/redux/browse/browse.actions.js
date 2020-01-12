import browseActionTypes from "./browse.types.js"; 
import axios from "axios"; 

export const fetchItemsStart = () => {
    return ({type:browseActionTypes.FETCH_ITEMS_START});
}

export const fetchItemsFailure = error => {
    return ({type:browseActionTypes.FETCH_ITEMS_FAILURE, payLoad:error});
}

export const fetchItemsSuccess = (search) => {
    const {items, searchString, priceRange, price, sortBy} = search; 
    return ({type:browseActionTypes.FETCH_ITEMS_SUCCESS , payLoad: {items, searchString,price,priceRange,sortBy}});
}

export const fetchItemsAsync = (search) => {
    const {searchString,priceRange,price,type} = search; 
    return async (dispatch) => {
        dispatch(fetchItemsStart()); 
        try {
            const {data:items} = await axios({
                url:"/api/collections/itemName?" + "searchString=" + searchString ,
                method:"GET",
            }); 
            dispatch(fetchItemsSuccess({items, searchString})); 
            }
         catch(error)
            {
                dispatch(fetchItemsFailure(error)); 
            }   
    }
}
