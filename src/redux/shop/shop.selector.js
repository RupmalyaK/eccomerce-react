import {createSelector} from "reselect"; 

const COLLECTIONID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:4,
    mens:5
};


const selectShop = state => state.shop; 

const selectCollections = createSelector(selectShop, 
    state =>  state.collections);

const selectCollectionsAsArray = createSelector(selectCollections, 
    state =>  {
        const collectionsArr = Object.keys(state).map(key => {
            const newObj = state[key];
            return newObj;
        })
        return collectionsArr
    });
        
const selectCollectionFilteredCollections = createSelector(selectShop, state => state.filteredCollections); 

const selectCollection = collectionParam => 
createSelector(selectCollections, 
    collections =>  collections[collectionParam]);

export const selectIsFetching = createSelector(selectShop, state => state.isFetching);
export {
    selectShop,
    selectCollections,
    selectCollectionFilteredCollections,
    selectCollection,
    selectCollectionsAsArray,
}