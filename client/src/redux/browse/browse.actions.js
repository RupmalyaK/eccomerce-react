import browseActionTypes from "./browse.types.js"; 
import axios from "axios"; 

export const fetchItemsStart = () => {
    return ({type:browseActionTypes.FETCH_ITEMS_START});
}

export const fetchItemsFailure = error => {
    return ({type:browseActionTypes.FETCH_ITEMS_FAILURE, payLoad:error});
}

export const fetchItemsSuccess = (search) => {
    const {items, searchString, priceRange, sortBy, isFeatured, categories} = search; 
    return ({type:browseActionTypes.FETCH_ITEMS_SUCCESS , payLoad: {items, searchString,priceRange,sortBy,isFeatured,priceRange, categories}});
}

export const fetchItemsAsync = (search) => {
    let {searchString,priceRange,type, sortBy, isAsc,categories, isFeatured} = search; 
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
       if (typeof categories === "undefined")
            {
                categories = currentBrowseState.categories;
            } 
        if (typeof isFeatured === "undefined")
            {
                isFeatured = currentBrowseState.isFeatued; 
            }       
         if(searchString === "")
            {
                dispatch(fetchItemsSuccess({items:[],searchString,priceRange, sortBy, isAsc, categories, isFeatured})); 
                return; 
            }   
        try {
            const {data:items} = await axios({
                url:"/api/collections/itemName",
                method:"GET",
                params:{
                   searchString,
                   sortBy,
                   isAsc,
                   isFeatured,
                   priceMin:priceRange[0],
                   priceMax:priceRange[1], 
                   categories 
                },
            }); 
            dispatch(fetchItemsSuccess({items, searchString,priceRange, sortBy, isAsc, categories, isFeatured})); 
            }
         catch(error)
            {
                dispatch(fetchItemsFailure(error)); 
            }   
    }
}
