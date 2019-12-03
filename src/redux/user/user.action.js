import userActionTypes from "./user.types.js";
import userActionType from "./user.types.js";
import {auth,createUserProfileDoc} from "../../firebase/firebase.util.js";

export const signInStart = () => {
    return {type:userActionType.SIGN_IN_START,         
    };
}

export const signInSuccess = (currentUser) => {
    return {type:userActionType.SIGN_IN_SUCCESS,
            payLoad:currentUser};
}

export const signInUserFailure = error => {
    return {type:userActionType.SIGN_IN_FAILURE,
            payLoad:error};
}

export const signInUserWithEmailAndPasswordAsync = (emailAndPassword) => {
    const {email , password} = emailAndPassword;   
  return async (dispatch) => {
    dispatch(signInStart());
    const currentUser = await auth.signInWithEmailAndPassword(email , password); 
    dispatch(signInSuccess(currentUser));
  }
}

export const setCurrentUser = (user) =>
    {
        return {
            type:userActionType.SET_USER,
            payLoad:user
        };
    }

    
export const setUnsubscriber = (UnsubscriberfunctionReference) => {
    return {
        type:userActionType.SET_UNSUBSCRIBER,
        payLoad:UnsubscriberfunctionReference,
    };
}
export const checkSession = () => { 
    return async (dispatch) => {
        let unsubscriber = null; 
        unsubscriber = auth.onAuthStateChanged(
            async userAuth => {
                if(userAuth)
                { 
                    const userRef = await createUserProfileDoc(userAuth);     
                    userRef.onSnapshot(snapshot => { console.log()
                        dispatch(setCurrentUser({
                        id:snapshot.id,
                        ...snapshot.data()
                        })); 
                    });
                    return;
                }
                return;
                }
            ); 

            dispatch(setUnsubscriber(unsubscriber))
        }
}






