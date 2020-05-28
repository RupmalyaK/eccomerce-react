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
    currentItem:{},
    isFetchingCurrentItem:false,
    fetchCurrentItemError:null,
    isPostingReview:false,
    postingReviewError:null,
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
                    
            case actionTypes.FETCH_CURRENT_ITEM_START:
                     return {...state, isFetchingCurrentItem:true}; 
            case actionTypes.FETCH_CURRENT_ITEM_FAILURE:
                      return {...state, isFetchingCurrentItem:false, fetchCurrentItemError:payLoad};
            case actionTypes.FETCH_CURRENT_ITEM_SUCCESS:
                       return {...state, isFetchingCurrentItem:false, currentItem:payLoad};  
            
            case actionTypes.POST_REVIEW_START:
                        return {...state,isPostingReview:true};
            case actionTypes.POST_REVIEW_SUCCESS:
                        return {...state,isPostingReview:false};
            case actionTypes.POST_REVIEW_FAILURE:            
                         return {...state,isPostingReview:false,postingReviewError:payLoad};   
                
             case actionTypes.SET_CURRENT_ITEM:
                        return {...state, currentItem:payLoad};          
            default:
                    return state; 
        }

}

export default browseReducer; 
