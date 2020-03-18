import browseActionTypes from "./browse.types.js"; 
import axios from "axios"; 

export const fetchItemsStart = () => {
    return ({type:browseActionTypes.FETCH_ITEMS_START});
}

export const fetchItemsFailure = error => {
    return ({type:browseActionTypes.FETCH_ITEMS_FAILURE, payLoad:error});
}

export const fetchItemsSuccess = (search) => {
    return ({type:browseActionTypes.FETCH_ITEMS_SUCCESS , payLoad: {...search}});
}

export const fetchItemsAsync = (search) => {
    let {searchString,priceRange,type, sortBy, isAsc,categories, isFeatured} = search; 
    
    return async (dispatch, getState) => {
        dispatch(fetchItemsStart());
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


export const fetchCurrentItemStart = () => {
    return {type:browseActionTypes.FETCH_CURRENT_ITEM_START};
}

export const fetchCurrentItemSuccess = (currentItem) => {
    return {type:browseActionTypes.FETCH_CURRENT_ITEM_SUCCESS, payLoad:currentItem};
}

export const fetchCurrentItemFailure = error => {
    return {type:browseActionTypes.FETCH_CURRENT_ITEM_FAILURE, payLoad:error};
}

export const fetchCurrentItemAsync = (_id, type) => {
    return (async (dispatch) => {
        dispatch(fetchCurrentItemStart());
        try{
            const {data:currentItem} = await axios({
                mathod:"GET",
                url:"/api/item/",
                params:{
                    _id,
                    type
                }
            });
            dispatch(fetchCurrentItemSuccess(currentItem));
           }
        catch(error)
            {
                dispatch(fetchCurrentItemFailure(error));
            }   
        
    });
}

export const setCurrentItem = (currentItem) => {
    return  {type:browseActionTypes.SET_CURRENT_ITEM, payLoad:currentItem};
}
