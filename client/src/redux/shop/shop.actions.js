import shopActionTypes from "./shop.types.js";
import {firestore, convertCollectionsSnapshotToMap} from "../../firebase/firebase.util.js"; 

const fetchCollectionStart = () => {
    return {
        type:shopActionTypes.FETCH_COLLECTION_START,
    };
}


const fetchCollectionSuccess = (collectionsObj ) => {
    return {
        type:shopActionTypes.FETCH_COLLECTION_SUCCESS,
        payLoad:collectionsObj,
    };
}

const fetchCollectionFailure = (errorMessage) =>
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

const fetchFeaturedItemsStart = () => {
    return {type:shopActionTypes.FETCH_FEATURED_ITEMS_START};
}

const fetchFeaturedItemsSuccess = items => {
    return {type:shopActionTypes.FETCH_FEATURED_ITEMS_SUCCESS, payLoad:items};
}
 const fetchFeaturedItemsFailure = error => {
    return {type:shopActionTypes.FETCH_FEATURED_ITEMS_FAILURE, payLoad:error};
}

export const fetchFeaturedItemsAsync = () => {
    return async dispatch => {
        const collectionsRef = firestore.collection("collections"); 
        dispatch(fetchFeaturedItemsStart());
        try {
            const collectionsSnapshot = await collectionsRef.get();
            const collectionSnapshotsArr = collectionsSnapshot.docs;
          
           let featuredItems = collectionSnapshotsArr.map(collectionSnap => { 
               const featuredItem = collectionSnap.data().items.find(item => item.featured === true);
                return featuredItem; 
            }, []);
            featuredItems = featuredItems.filter(item => item != undefined);
            dispatch(fetchFeaturedItemsSuccess(featuredItems));
            }
        catch(error)
            {
                dispatch(fetchFeaturedItemsFailure(error));
            }
    }
}