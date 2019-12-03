import shopActionTypes from "./shop.types.js";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.util.js"; 

export const fetchCollectionStart = () => {
    return {
        type:shopActionTypes.FETCH_COLLECTION_START,
    };
}


export const fetchCollectionSuccess = (collectionsObj ) => {
    return {
        type:shopActionTypes.FETCH_COLLECTION_SUCCESS,
        payLoad:collectionsObj,
    };
}

export const fetchCollectionFailure = (errorMessage) =>
    {
        return {
            type:shopActionTypes.fetchCollectionFailure,
            payLoad:errorMessage, 
        }
    }



export const fetchCollectionStartAsync =  () => {
    return async dispatch => {
        const collectionsRef = firestore.collection("collections"); 
        dispatch(fetchCollectionStart());
        try{
        const collectionsSnapshot = await collectionsRef.get();
        const collectionsObj = convertCollectionsSnapshotToMap(collectionsSnapshot);
        dispatch(fetchCollectionSuccess(collectionsObj));
         }
         catch(error)
            {
                dispatch(fetchCollectionFailure(error));
            }
        
    }
}

