import {createSelector} from "reselect"; 

export const selectBrowse = state => state.browse; 

export const selectItems = createSelector(selectBrowse, state => state.items); 

export const selectPrice = createSelector(selectBrowse, state => state.price); 

export const selectString = createSelector(selectBrowse, state => state.string); 

export const selectPriceRange = createSelector(selectBrowse, state => state.priceRange); 

export const selectIsFetching = createSelector(selectBrowse, state => state.isFetching); 

export const selectFetchingError = createSelector(selectBrowse, state => state.fetchingError); 

