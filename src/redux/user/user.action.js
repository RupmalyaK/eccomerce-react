import userActionTypes from "./user.types.js";
import {auth,createUserProfileDoc, provider} from "../../firebase/firebase.util.js";

export const signInStart = () => {
    return {type:userActionTypes.SIGN_IN_START,         
    };
}

export const signInSuccess = (currentUser) => {
    return {type:userActionTypes.SIGN_IN_SUCCESS,
            payLoad:currentUser};
}

export const signInFailure = error => {
    return {type:userActionTypes.SIGN_IN_FAILURE,
            payLoad:error};
}

export const signInUserWithEmailAndPasswordAsync = (email , password) => {
  return async (dispatch) => {
    dispatch(signInStart());
    try{
    const currentUser = await auth.signInWithEmailAndPassword(email , password); 
    dispatch(signInSuccess(currentUser));
    }
    catch(error)
    {
        dispatch(signInFailure(error));
    }
  }
}

export const signInWithGoogleAsync = () => {
    return async dispatch => {
        dispatch(signInStart());
        try{
            await auth.signInWithPopup(provider);
            dispatch(signInSuccess());
        }
        catch(error)
            {
                dispatch(signInFailure(error)); 
            }
    }
}


export const checkSessionStart = () => { 
    return {
        type:userActionTypes.CHECK_SESSION_START,
    };
}
export const checkSessionSuccess = (user) =>
    {
        return {
            type:userActionTypes.CHECK_SESSION_SUCCESS,
            payLoad:user
        };
    }

export const checkSessionFailure = (error) => {
    return {
        type:userActionTypes.CHECK_SESSION_FAILURE,
        sessionError:error,
    }
}    

export const setUnsubscriber = (unsubscriberFR) => {
    return {
        type:userActionTypes.SET_UNSUBSCRIBER,
        payLoad:unsubscriberFR,
    }
}

export const checkSessionAsync = () => { 
    return async (dispatch) => {
        dispatch(checkSessionStart());
        let unsubscriber = null; 
        unsubscriber = auth.onAuthStateChanged(
            async userAuth => {
                if(userAuth)
                {         
                    const userRef = await createUserProfileDoc(userAuth);     
                    userRef.onSnapshot(snapshot => { 
                        dispatch(checkSessionSuccess({
                        id:snapshot.id,
                        ...snapshot.data()
                        }, )); 
                    });
                    return;
                }
                return;
                }
            ); 

            dispatch(setUnsubscriber(unsubscriber))
        }
}

export const signOutStart = () => {
return {
    type:userActionTypes.SIGN_OUT_START,
}
}

export const signOutSuccess = data => {
    return {
        type:userActionTypes.SIGN_OUT_SUCCESS,
        payLoad:data,
    }
}

export const signOutFailure = error => {
    return {
        type:userActionTypes.SIGN_OUT_FAILURE,
        payLoad:error,
    };
}

export const signOutAsync = () => {
    return async dispatch => {
        dispatch(signOutStart());
        try{
        await auth.signOut();
        dispatch(signOutSuccess());
        }
        catch(error)
            {
                dispatch(signOutFailure(error));
            }
    }
}

export const signUpStart = () =>
    {
        return {
            type:userActionTypes.SIGN_UP_START,
        };
    }

export const signUpSuccess = (user) => {
    return {
        type:userActionTypes.SIGN_UP_SUCCESS,
        payLoad:user,
    };
}    







