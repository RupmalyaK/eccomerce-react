import actionTypes from "./browse.types.js"; 
import axios from "axios"; 
import {auth,getFirebaseUserById} from "../../firebase/firebase.util.js";


export const fetchItemsStart = () => {
    return ({type:actionTypes.FETCH_ITEMS_START});
}

export const fetchItemsFailure = error => {
    return ({type:actionTypes.FETCH_ITEMS_FAILURE, payLoad:error});
}

export const fetchItemsSuccess = (search) => {
    return ({type:actionTypes.FETCH_ITEMS_SUCCESS , payLoad: {...search}});
}

export const fetchItemsAsync = (search) => {
    let {searchString,priceRange,type, sortBy, isAsc,categories, isFeatured,sellerId} = search; 
        
    return async (dispatch, getState) => {
        dispatch(fetchItemsStart());
         const currentBrowseState = getState().browse; 
         if(typeof searchString === "undefined" && !sellerId)
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
         if(searchString === "" && !sellerId)
            {
                dispatch(fetchItemsSuccess({items:[],searchString,priceRange, sortBy, isAsc, categories, isFeatured})); 
                 isFeatured = true;
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
                   categories,
                   sellerId 
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


