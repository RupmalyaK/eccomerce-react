import {filterItems} from "./shop.util.js"; 
import shopActionTypes from "./shop.types.js";

const INITIAL_STATE = {
    collections:{},
    filteredCollections:{},
}

const shopReducer = (state = INITIAL_STATE , action) => {
    const {type , payLoad} = action; 

    switch(type)
        {
            case shopActionTypes.UPDATE_COLLECTION:
                return {
                    ...state, 
                    collections: payLoad,
                    filteredCollections:filterItems(payLoad),
                };
            default:
                return state; 
        }
}

export default shopReducer;