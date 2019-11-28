import {createSelector} from "reselect"; 

const COLLECTIONID_MAP = {
    hats:1,
    sneakers:2,
    jackets:3,
    womens:2,
    mens:5
};


const selectShop = state => state.shop; 

const selectCollections = createSelector(selectShop, 
    state =>  state.collections);
    
const selectCollectionFilteredCollections = createSelector(selectShop, state => state.filteredCollections); 

const selectCollection = collectionParam => 
createSelector(selectCollections, 
    collections =>  collections.find(collection => collection.id === COLLECTIONID_MAP[collectionParam] ));


export {
    selectShop,
    selectCollections,
    selectCollectionFilteredCollections,
    selectCollection,
}