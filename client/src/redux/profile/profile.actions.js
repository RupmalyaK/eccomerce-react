import actionTypes from "./profile.types.js"; 
import axios from "axios"; 
import {auth,getFirebaseUserById} from "../../firebase/firebase.util.js";


export const fetchCurrentProfileStart = () => {
    return {type:actionTypes.FETCH_CURRENT_PROFILE_START};
}

export const fetchCurrentProfilefailure = (error) => {
    return {type:actionTypes.FETCH_CURRENT_PROFILE_FAILURE,payLoad:error};
}

export const fetchCurrentProfileSuccess = (profile) => {
    return {type:actionTypes.FETCH_CURRENT_PROFILE_SUCCESS,payLoad:profile};
}

export const fetchCurrentProfileAsync = (id) => {
    return async (dispatch) => {
        dispatch(fetchCurrentProfileStart());
        try{
        const profile = await getFirebaseUserById(id);
        const {data}= await axios({
            method:"GET",
            url:`/api/seller/${id}`,
        });
        
        profile.reviewsData = data;
        profile.id = id;
        dispatch(fetchCurrentProfileSuccess(profile));
        }
        catch(error)
            {
                dispatch(fetchCurrentProfilefailure(error));
            }
    }
}

export const setCurrentProfileStart = () => {
    return {type:actionTypes.SET_CURRENT_PROFILE_START};
}

export const setCurrentProfileFailure = (error) => {
    return {type:actionTypes.SET_CURRENT_PROFILE_FAILURE,payLoad:error};
}

export const setCurrentProfileSuccess = (currentProfile) => {
    return {type:actionTypes.SET_CURRENT_PROFILE_SUCCESS,payLoad:currentProfile};
}

export const setCurrentProfileAsync = (profile,id) => {
    return async (dispatch) => {
           
            dispatch(setCurrentProfileStart());
            try{    
            const {data}= await axios({
                method:"GET",
                url:`/api/seller/${id}`,
            });
            profile.reviewsData = data;
            profile.id = id;
            dispatch(setCurrentProfileSuccess(profile));
            }
            catch(error)
                {
                    dispatch(setCurrentProfileFailure(error));
                }
    }
}

export const postSellerReviewStart = () => {
    return {type:actionTypes.POST_REVIEW_SELLER_START};
}

export const postSellerReviewFailure = (error) => {
    return {type:actionTypes.POST_REVIEW_SELLER_FAILURE,payLoad:error};
}

export const postSellerReviewSuccess = (reviewsData) => {
    return {type:actionTypes.POST_REVIEW_SELLER_SUCCESS,payLoad:reviewsData};
}

export const postSellerReviewAsync = (text,rating,sellerObjectId,userObjectId) => {
    return async (dispatch) => {

        dispatch(postSellerReviewStart());
        try{
            const accessToken = await auth.currentUser.getIdToken();  
            const {data:reviewData} = await axios({
                method:"POST",
                url:"/api/seller/",
                data:{rating,sellerObjectId,userObjectId,text},
                headers: {
                    authorization:"Bearer " + accessToken,
                },
            }); 
            dispatch(postSellerReviewSuccess(reviewData));
        }
        catch(error){
            dispatch(postSellerReviewFailure(error))
        }
    }
}


