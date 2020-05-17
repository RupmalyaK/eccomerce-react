import shopActionTypes from "./shop.types.js";
import {auth} from "../../firebase/firebase.util.js"; 
import axios from "axios";
import {collectionsArrToObj} from "../../util.js";

const fetchCollectionsStart = () => {
    return {
        type:shopActionTypes.FETCH_COLLECTIONS_START,
    };
}


const fetchCollectionsSuccess = (collectionsObj ) => {
    return {
        type:shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payLoad:collectionsObj,
    };
}

const fetchCollectionsFailure = (errorMessage) =>
    {
        return {
            type:shopActionTypes.FETCH_COLLECTIONS_FAILURE,
            payLoad:errorMessage, 
        }
    }



export const fetchCollectionsStartAsync =  () => {
    return async (dispatch )=> {
       dispatch(fetchCollectionsStart()); 
   
        try{
             const collections = await axios({
                 url:"/api/collections",
                 method:"GET",
             });  
             dispatch(fetchCollectionsSuccess(collections.data));   
           }
        catch(error)
            {
             dispatch(fetchCollectionsFailure(error));       
            }     
    }
}


const fetchFeaturedItemsStart = () => {
    return {type:shopActionTypes.FETCH_FEATURED_ITEMS_START};
}

const fetchFeaturedItemsSuccess = items => {
    return {type:shopActionTypes.FETCH_FEATURED_ITEMS_SUCCESS, payLoad:items};
}
 const fetchFeaturedItemsFailure = error => {
    return {type:shopActionTypes.FETCH_FEATURED_ITEMS_FAILURE, payLoad:error};
}

export const fetchFeaturedItemsAsync = () => {
    return async dispatch => {
     dispatch(fetchFeaturedItemsStart());
     try{
        
           const featuredItems = await axios({
                url:"/api/collections/collection/items/all?isFeatured=true",
                method:"GET",
              
            }); console.log("this are f items",featuredItems);
           dispatch(fetchFeaturedItemsSuccess(featuredItems.data));
        }
     catch(error)
        {
            dispatch(fetchFeaturedItemsFailure(error)); 
        }   
    }
}

export const fetchAutocompleteStart = () => {
    return {type:shopActionTypes.FETCH_AUTOCOMPLETE_ITEMS_START}
} 

export const fetchAutocompleteFailure = (error) => {
    return {type:shopActionTypes.FETCH_AUTOCOMPLETE_ITEMS_FAILURE, payLoad:error};
}

export const fetchAutocompleteSuccess = (autocompleteItems) => {
    return {type:shopActionTypes.FETCH_AUTOCOMPLETE_ITEMS_SUCCESS, payLoad:autocompleteItems};
}

export const fetchAutocompleteAsync = (string) => {
    return async (dispatch) => {
        dispatch(fetchAutocompleteStart());
        if(!string)
            {
                fetchAutocompleteSuccess([]);
                return; 
            }
        try{
            const autocompleteCollections = await axios({
                url:"/api/collections/itemName?" + "searchString=" + string + "&isSplice=true" ,
                method:"GET",
            });
            dispatch(fetchAutocompleteSuccess(autocompleteCollections.data));
           }
        catch(error)
            {
                dispatch(fetchAutocompleteFailure(error));
            }  
    }
}