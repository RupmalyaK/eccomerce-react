import {createSelector} from "reselect"; 

export const selectBrowse = state => state.browse; 

export const selectSearchString = createSelector(selectBrowse, browse => browse.searchString);

export const selectItems = createSelector(selectBrowse, state => state.items); 

export const selectString = createSelector(selectBrowse, state => state.string); 

export const selectPriceRange = createSelector(selectBrowse, state => state.priceRange); 

export const selectIsFetching = createSelector(selectBrowse, state => state.isFetching); 

export const selectFetchingError = createSelector(selectBrowse, state => state.fetchingError); 

export const selectSortBy = createSelector(selectBrowse, state => state.sortBy);

export const selectIsAsc = createSelector(selectBrowse, state => state.isAsc);

export const selectNumberOfItems = createSelector(selectBrowse, state => state.numberOfItems);

export const selectIsFeatured = createSelector(selectBrowse, state => state.isFeatured);

export const selectCategories = createSelector(selectBrowse, state => state.categories);

export const selectCurrentItem = createSelector(selectBrowse, state => state.currentItem); 

export const selectIsFetchingCurrentItem = createSelector(selectBrowse, state => state.isFetchingCurrentItem);

export const selectIsPostingReview = createSelector(selectBrowse, state => state.selectIsPostingReview);


