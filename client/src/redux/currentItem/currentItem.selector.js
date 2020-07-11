import {createSelector} from "reselect"; 

export const selectCurrentItemReducer = state => state.currentItem; 

export const selectCurrentItem = createSelector(selectCurrentItemReducer, state => state.item); 

export const selectIsFetchingCurrentItem = createSelector(selectCurrentItemReducer, state => state.isFetchingCurrentItem);

export const selectIsPostingReview = createSelector(selectCurrentItemReducer, state => state.isPostingReview);
