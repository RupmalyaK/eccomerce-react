import axios from "axios"; 
import {auth,getFirebaseUserById} from "../../firebase/firebase.util.js";
import actionTypes from "./currentItem.types";

export const fetchCurrentItemStart = () => {
    return {type:actionTypes.FETCH_CURRENT_ITEM_START};
}

export const fetchCurrentItemSuccess = (currentItem) => {
    return {type:actionTypes.FETCH_CURRENT_ITEM_SUCCESS, payLoad:currentItem};
}

export const fetchCurrentItemFailure = error => {
    return {type:actionTypes.FETCH_CURRENT_ITEM_FAILURE, payLoad:error};
}

export const fetchCurrentItemAsync = (_id, type) => {
    return (async (dispatch) => {
        dispatch(fetchCurrentItemStart());
        try{
            const {data:currentItem} = await axios({
                mathod:"GET",
                url:"/api/item/",
                params:{
                    _id,
                    type
                }
            }); 
            const seller = await getFirebaseUserById(currentItem.sellerId);
            currentItem.seller = seller;
            dispatch(fetchCurrentItemSuccess(currentItem));
           }
        catch(error)
            {
                dispatch(fetchCurrentItemFailure(error));
            }   
        
    });
}

export const setCurrentItemStart = (currentItem) => {
    return  {type:actionTypes.SET_CURRENT_ITEM_START, payLoad:currentItem};
}

export const setCurrentItemFailure = (error) => {
    return {type:actionTypes.SET_CURRENT_ITEM_FAILURE,payLoad:error};
}

export const setCurrentItemSuccess = (item) => {
    return {type:actionTypes.SET_CURRENT_ITEM_SUCCESS,payLoad:item};
}

export const setCurrentItemAsync = (item,type) => {
    return async(dispatch) => {
        dispatch(setCurrentItemStart());
        try{
            const seller = await getFirebaseUserById(item.sellerId);
            item.type = type; 
            item.seller = seller;
            dispatch(setCurrentItemSuccess(item));
        }
        catch{
            dispatch(setCurrentItemFailure());
        }

    }
}

export const postReviewStart = () => {
    return({type:actionTypes.POST_REVIEW_START});
}

export const postReviewFailure = (error) => {
    return({type:actionTypes.POST_REVIEW_FAILURE,payLoad:error});
}

export const postReviewSuccess = (reviews) => {
    return({type:actionTypes.POST_REVIEW_SUCCESS,payLoad:reviews});
}

export const postReviewAsync = (text,currentRating) => {
    return async (dispatch,getState) => {
        dispatch(postReviewStart());
        const currentItem = getState().currentItem.item;
        const userObjectId = getState().user.currentUser.id;
        const {type:itemType,_id:itemObjectId} = currentItem;
      //  console.log("DEBUG", itemType);
        try{
            const accessToken = await auth.currentUser.getIdToken();
           const {data} = await axios(
                {
                    method:"POST",
                    url:"/api/collections/collection/item/review",
                    data:{
                        itemType,
                        itemObjectId,
                        userObjectId,
                        rating:currentRating,
                        text
                    },
                    headers: {
                        authorization:"Bearer " + accessToken,
                    }
                }
            );
           const {reviews} = data;
           dispatch(postReviewSuccess(reviews));
    } 
    catch(error)
        {
            dispatch(postReviewFailure(error));
        }
}
}
