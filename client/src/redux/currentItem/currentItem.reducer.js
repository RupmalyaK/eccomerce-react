import actionTypes from "./currentItem.types.js";

const INITIAL_STATE = {
    item:{},
    isFetchingCurrentItem:false,
    fetchCurrentItemError:null,
    isPostingReview:false,
    postingReviewError:null,
};


const currentItemReducer = (state = INITIAL_STATE, action) => {
    const {type, payLoad} = action; 
    
    switch(type)
        {
            case actionTypes.FETCH_CURRENT_ITEM_START:
                        return {...state, isFetchingCurrentItem:true}; 
            case actionTypes.FETCH_CURRENT_ITEM_FAILURE:
                        return {...state, isFetchingCurrentItem:false, fetchCurrentItemError:payLoad};
            case actionTypes.FETCH_CURRENT_ITEM_SUCCESS:
                        return {...state, isFetchingCurrentItem:false, item:payLoad};  
            
            case actionTypes.POST_REVIEW_START:
                        return {...state,isPostingReview:true};
            case actionTypes.POST_REVIEW_SUCCESS:
                        return {...state,isPostingReview:false,item:{...state.item,reviews:payLoad}};
            case actionTypes.POST_REVIEW_FAILURE:            
                            return {...state,isPostingReview:false,postingReviewError:payLoad};   
                
            case actionTypes.SET_CURRENT_ITEM_START:
                        return {...state, isSettingCurrentItem:true};
            case actionTypes.SET_CURRENT_ITEM_FAILURE:
                        return {...state,isSettingCurrentItem:false,settingCurrentItemError:payLoad};
            case actionTypes.SET_CURRENT_ITEM_SUCCESS:
                        return {...state,isSettingCurrentItem:false,item:payLoad}; 
            default:
                    return state; 
        }

}


export default currentItemReducer; 