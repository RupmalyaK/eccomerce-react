import browseActionTypes from "./browse.types.js"; 

const INITIAL_STATE = {
    items:[],
    price:"",
    priceRange:null,
    searchString:"",
    sortBy:"",
    isFetching:false, 
    fetchError:"",
};

const browseReducer = (state = INITIAL_STATE, action) => {
    const {type, payLoad} = action; 

    switch(type)
        {
            case browseActionTypes.FETCH_ITEMS_START:
                    return {...state, isFetching:true };
            case browseActionTypes.FETCH_ITEMS_FAILURE:
                    return {...state, isFetching:false, fetchError:payLoad};
            case browseActionTypes.FETCH_ITEMS_SUCCESS:
                    const {items, searchString, price , priceRange, sortBy} = payLoad
                    return {...state, isFetching:false, items, searchString, price, priceRange, sortBy};                     
            default:
                    return state; 
        }

}

export default browseReducer; 
