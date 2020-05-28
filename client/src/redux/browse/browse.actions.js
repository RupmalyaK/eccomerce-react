import actionTypes from "./browse.types.js"; 
import axios from "axios"; 
import {auth} from "../../firebase/firebase.util.js";


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
    return {type:actionTypes.FETCH_CURRENT_ITEM_START};
}

export const fetchCurrentItemSuccess = (currentItem) => {
    return {type:actionTypes.FETCH_CURRENT_ITEM_SUCCESS, payLoad:currentItem};
}

export const fetchCurrentItemFailure = error => {
    return {type:actionTypes.FETCH_CURRENT_ITEM_FAILURE, payLoad:error};
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
    return  {type:actionTypes.SET_CURRENT_ITEM, payLoad:currentItem};
}

export const postReviewStart = () => {
    return({type:actionTypes.POST_REVIEW_START});
}

export const postReviewFailure = (error) => {
    return({type:actionTypes.POST_REVIEW_FAILURE,payLoad:error});
}

export const postReviewSuccess = (reviews) => {
    return({type:actionTypes.POST_REVIEW_SUCCESS,payLoad:reviews});
}

export const postReviewAsync = (text,currentRating) => {
    return async (dispatch,getState) => {
        dispatch(postReviewStart());
        const currentItem = getState().browse.currentItem;
        const userObjectId = getState().user.currentUser.id;
        const {type:itemType,_id:itemObjectId} = currentItem;
        try{
            const accessToken = await auth.currentUser.getIdToken();
           const {data} = await axios(
                {
                    method:"POST",
                    url:"/api/collections/collection/item/review",
                    data:{
                        itemType,
                        itemObjectId,
                        userObjectId,
                        rating:currentRating,
                        text
                    },
                    headers: {
                        authorization:"Bearer " + accessToken,
                    }
                }
            );
           const {reviews} = data;
           dispatch(postReviewSuccess(reviews));
    } 
    catch(error)
        {
            dispatch(postReviewFailure(error));
        }
}
}
