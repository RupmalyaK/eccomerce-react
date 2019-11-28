import COLLECTION_DATA from "../../data/shop-data.js"; 
import {filterItems} from "./shop.util.js"; 

const INITIAL_STATE = {
    collections:COLLECTION_DATA,
    filteredCollections: filterItems(COLLECTION_DATA),
}

const shopReducer = (state = INITIAL_STATE , action) => {
    const {type , payLoad} = action; 

    switch(type)
        {
            default:
                return state; 
        }
}

export default shopReducer;