import {createSelector} from "reselect"; 

export const COLLECTIONID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
};


export const selectShop = state => state.shop; 

export const selectCollections = createSelector(selectShop, 
    state =>  state.collections);

export const selectCollectionsAsArray = createSelector(selectCollections, 
    state =>  {
        const collectionsArr = Object.keys(state).map(key => {
            const newObj = state[key];
            return newObj;
        })
        return collectionsArr
    });
        
export const selectCollectionFilteredCollections = createSelector(selectShop, state => state.filteredCollections); 

export const selectFeaturedItems = createSelector(selectShop, state => state.featuredItems);

export const selectIsFetchingFeaturedItems = createSelector(selectShop, state => state.isFetchingFeaturedItems);

export const selectCollection = collectionParam => 
createSelector(selectCollections, 
    collections =>  collections[collectionParam]);

export const selectIsFetching = createSelector(selectShop, state => state.isFetching);

export const selectIsFetchingAutocompleteCollections = createSelector(selectShop, state => state.isFetchingAutocompleteCollections);

export const selectAutocompleteCollections = createSelector(selectShop, state => state.autocompleteCollections);

