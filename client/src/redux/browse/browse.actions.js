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
    let {searchString,priceRange,price,type, sortBy, isAsc} = search; 
    return async (dispatch, getState) => {
         const currentBrowseState = getState().browse; 
         if(typeof searchString === "undefined")
            {
                searchString = currentBrowseState.searchString; 
            }
         if (typeof priceRange === "undefined")
            {
                priceRange = currentBrowseState.priceRange; 
            }   
        if (typeof price === "undefined") 
            {
                price = currentBrowseState.price; 
            }
        if (typeof type === "undefined")
            {
                type = currentBrowseState.type; 
            }
        if (typeof sortBy === "undefined")
            {
                sortBy = currentBrowseState.sortBy;
            }
        if (typeof isAsc === "undefined") 
            {
                isAsc = currentBrowseState.isAsc;
            }   
                
        dispatch(fetchItemsStart()); 
        try {
            const {data:items} = await axios({
                url:"/api/collections/itemName?" + "searchString=" + searchString + "&sortBy=" + sortBy + "&isAsc=" + isAsc,
                method:"GET",
            }); 
            dispatch(fetchItemsSuccess({items, searchString, price, priceRange, sortBy, isAsc})); 
            }
         catch(error)
            {
                dispatch(fetchItemsFailure(error)); 
            }   
    }
}
