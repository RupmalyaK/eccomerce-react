import actionTypes from "./browse.types.js"; 

const INITIAL_STATE = {
    items:[],
    priceRange:[],
    searchString:"",
    sortBy:"",
    isAsc:true,
    isFetching:false, 
    fetchError:"",
    numberOfItems:"",
    isFeatured:false, 
    categories:[],
};

const browseReducer = (state = INITIAL_STATE, action) => {
    const {type, payLoad} = action; 
    switch(type)
        {
            case actionTypes.FETCH_ITEMS_START:
                    return {...state, isFetching:true };
            case actionTypes.FETCH_ITEMS_FAILURE:
                    return {...state, isFetching:false, fetchError:payLoad};
            case actionTypes.FETCH_ITEMS_SUCCESS:
                    const {items, searchString, priceRange, sortBy, categories, isFeatured,isAsc} = payLoad;
                    const numberOfItems = items.length.toString(); 
                    return {...state, isFetching:false, items, searchString, priceRange, sortBy, numberOfItems, categories, isFeatured,isAsc}; 

            default:
                    return state; 
        }

}

export default browseReducer; 
