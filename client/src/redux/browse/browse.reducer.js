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
    currentProfile:null,
    isFetchingCurrentProfile:false,
    fetchingCurrentProfileError:null,
    isSettingCurrentItem:false, 
    settingCurrentItemError:null,
    profileReview:[],
    isFetchingProfileReviews:false,
    fetchingProfileReviewsError:null,
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
                        return {...state,isPostingReview:false,currentItem:{...state.currentItem,reviews:payLoad}};
            case actionTypes.POST_REVIEW_FAILURE:            
                         return {...state,isPostingReview:false,postingReviewError:payLoad};   
                
            case actionTypes.SET_CURRENT_ITEM_START:
                        return {...state, isSettingCurrentItem:true};
            case actionTypes.SET_CURRENT_ITEM_FAILURE:
                        return {...state,isSettingCurrentItem:false,settingCurrentItemError:payLoad};
            case actionTypes.SET_CURRENT_ITEM_SUCCESS:
                        return {...state,isSettingCurrentItem:false,currentItem:payLoad};           
                        
                        
            case actionTypes.FETCH_CURRENT_PROFILE_START:
                        return {...state,isFetchingCurrentProfile:true};
            case actionTypes.FETCH_CURRENT_PROFILE_FAILURE:
                        return {...state,isFetchingCurrentProfile:false,fetchingCurrentProfileError:payLoad};
            case actionTypes.FETCH_CURRENT_PROFILE_SUCCESS:
                        return {...state,isFetchingCurrentProfile:false,currentProfile:payLoad};
            
            case actionTypes.SET_CURRENT_PROFILE:
                        return{...state,currentProfile:payLoad};
             
            case actionTypes.FETCH_SELLER_REVIEWS_START:
                        return {...state,isFetchingProfileReviews:true};
            case actionTypes.FETCH_SELLER_REVIEWS_FAILURE:
                        return {...state,isFetchingProfileReviews:false,fetchingCurrentProfileError:payLoad};
            case actionTypes.FETCH_SELLER_REVIEWS_SUCCESS:
                        return {...state,isFetchingProfileReviews:false,profileReview:payLoad};                                    
            
            default:
                    return state; 
        }

}

export default browseReducer; 
