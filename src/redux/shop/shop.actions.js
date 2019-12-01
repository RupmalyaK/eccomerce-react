import shopActionTypes from "./shop.types.js";

export const updateCollections = collectionsObj => {
    return {
        type:shopActionTypes.UPDATE_COLLECTION,
        payLoad:collectionsObj,
    }
}