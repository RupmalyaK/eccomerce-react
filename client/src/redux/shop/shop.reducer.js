import {filterItems} from "./shop.util.js"; 
import shopActionTypes from "./shop.types.js";

const INITIAL_STATE = {
    collections:{},
    filteredCollections:{},
    isFetching:false, 
    errorMessage:"",
    featuredItems:[],
    isFetchingFeaturedItems:false,
    FeaturedItemsFetchingError:null,
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

            case shopActionTypes.FETCH_FEATURED_ITEMS_START:
                    return {...state, isFetchingFeaturedItems:true};
            case shopActionTypes.FETCH_FEATURED_ITEMS_SUCCESS:
                    return {...state, featuredItems:payLoad, isFetchingFeaturedItems:false};
            case shopActionTypes.FETCH_FEATURED_ITEMS_FAILURE:
                    return {...state, FeaturedItemsFetchingError:payLoad, isFetchingFeaturedItems:false};

            default:
                return state; 
        }
}

export default shopReducer;