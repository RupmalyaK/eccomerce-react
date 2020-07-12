import actionTypes from "./profile.types.js"; 

const INITIAL_STATE = {
    currentProfile:null,
    isFetchingCurrentProfile:false,
    fetchingCurrentProfileError:null,
    isFetchingProfileReviews:false,
    fetchingProfileReviewsError:null,
    isPostingSellerReview:false,
    postingSellerReviewError:null,
    isSettingCurrentProfile:false,
    settingCurrentProfileError:null,
};

const profileReducer = (state = INITIAL_STATE, action) => {
    const {type, payLoad} = action; 
    switch(type)
        {     
            case actionTypes.FETCH_CURRENT_PROFILE_START:
                        return {...state,isFetchingCurrentProfile:true};
            case actionTypes.FETCH_CURRENT_PROFILE_FAILURE:
                        return {...state,isFetchingCurrentProfile:false,fetchingCurrentProfileError:payLoad};
            case actionTypes.FETCH_CURRENT_PROFILE_SUCCESS:
                        return {...state,isFetchingCurrentProfile:false,currentProfile:payLoad};
            
            case actionTypes.SET_CURRENT_PROFILE_START:
                        return{...state,isSettingCurrentProfile:true};
            case actionTypes.SET_CURRENT_PROFILE_FAILURE:
                        return {...state,isSettingCurrentProfile:false,settingCurrentProfileError:payLoad};
            case actionTypes.SET_CURRENT_PROFILE_SUCCESS:
                        return {...state,isSettingCurrentProfile:false,currentProfile:payLoad};                       
             
            case actionTypes.FETCH_SELLER_REVIEWS_START:
                        return {...state,isFetchingProfileReviews:true};
            case actionTypes.FETCH_SELLER_REVIEWS_FAILURE:
                        return {...state,isFetchingProfileReviews:false,fetchingCurrentProfileError:payLoad};
            case actionTypes.FETCH_SELLER_REVIEWS_SUCCESS:
                        return {...state,isFetchingProfileReviews:false,currentProfile:{...state.currentProfile,reviews:payLoad}};  
                        
            case actionTypes.POST_REVIEW_SELLER_START:
                        return {...state,isPostingReview:true};
            case actionTypes.POST_REVIEW_SELLER_FAILURE:
                        return {...state,isPostingReview:false,postingReviewError:payLoad};
             case actionTypes.POST_REVIEW_SELLER_SUCCESS:
                        return {...state,isPostingReview:false,currentProfile:{...state.currentProfile,reviewsData:payLoad}};                                  
            
            default:
                    return state; 
        }

}

export default profileReducer; 
