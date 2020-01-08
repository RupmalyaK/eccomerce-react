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
    autocompleteCollections:[], 
    isFetchingAutocompleteCollections:false,
    autocompleteError:null, 
}

const shopReducer = (state = INITIAL_STATE , action) => {
    const {type , payLoad} = action; 

    switch(type)
        {
           
            case shopActionTypes.FETCH_COLLECTIONS_START: 
                return {...state, isFetching:true};
            case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
                return {...state, isFetching:false, collections:payLoad, filteredCollections:filterItems(payLoad)};
            case shopActionTypes.FETCH_COLLECTIONS_FAILURE:
                return {...state, iseFetching:false, errorMessage:payLoad};     

            case shopActionTypes.FETCH_FEATURED_ITEMS_START:
                    return {...state, isFetchingFeaturedItems:true};
            case shopActionTypes.FETCH_FEATURED_ITEMS_SUCCESS:
                    return {...state, featuredItems:payLoad, isFetchingFeaturedItems:false};
            case shopActionTypes.FETCH_FEATURED_ITEMS_FAILURE:
                    return {...state, FeaturedItemsFetchingError:payLoad, isFetchingFeaturedItems:false};
            
            case shopActionTypes.FETCH_AUTOCOMPLETE_ITEMS_START:
                    return {...state, isFetchingAutocompleteCollections:true};
            case shopActionTypes.FETCH_AUTOCOMPLETE_ITEMS_FAILURE:
                    return {...state, isFetchingAutocompleteCollections:false ,autocompleteError:payLoad}
            case shopActionTypes.FETCH_AUTOCOMPLETE_ITEMS_SUCCESS:
                    return {...state, isFetchingAutocompleteCollections:false,autocompleteCollections:payLoad}                
            default:
                return state; 
        }
}

export default shopReducer;