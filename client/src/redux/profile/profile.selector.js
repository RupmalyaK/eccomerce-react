import {createSelector} from "reselect"; 

export const selectProfile = state => state.profile; 

export const selectIsFetchingCurrentProfile = createSelector(selectProfile, state => state.isFetchingCurrentProfile);

export const selectCurrentProfile = createSelector(selectProfile, state => state.currentProfile);

export const isPostingSellerReview = createSelector(selectProfile, state => state.isPostingSellerReview); 


