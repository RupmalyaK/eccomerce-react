import shopActionTypes from "./shop.types.js";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.util.js"; 
import {} from "redux-thunk";

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


export const fetchCollectionStartAsync = () => {
    return dispatch => {
        const collectionsRef = firestore.collection("collections"); 
        dispatch(fetchCollectionStart());
        collectionsRef.get()
        .then (collectionsSnapshot => {

                const collectionsObj = convertCollectionsSnapshotToMap(collectionsSnapshot);
                dispatch(fetchCollectionSuccess(collectionsObj));
        })
        .catch(error => {dispatch(error)});
    }
}