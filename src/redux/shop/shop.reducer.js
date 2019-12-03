import {filterItems} from "./shop.util.js"; 
import shopActionTypes from "./shop.types.js";

const INITIAL_STATE = {
    collections:{},
    filteredCollections:{},
    isFetching:false, 
    errorMessage:"",
}

const shopReducer = (state = INITIAL_STATE , action) => {
    const {type , payLoad} = action; 

    switch(type)
        {
           
            case shopActionTypes.FETCH_COLLECTION_START: 
                return {...state, isFetching:true};
            case shopActionTypes.FETCH_COLLECTION_SUCCESS:
                return {...state, isFetching:false, collections:payLoad, filteredCollections:filterItems(payLoad)};
            case shopActionTypes.FETCH_COLLECTION_FAILURE:
                return {...state, iseFetching:false, errorMessage:payLoad};        
            default:
                return state; 
        }
}

export default shopReducer;