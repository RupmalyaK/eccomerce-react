import userActionTypes from "./user.types.js";

const INITIAL_STATE = {
currentUser:null,
sessionError:"",
unsubscriberFR:null,
isCheckingSession:false, 
isSigningIn:false, 
isSigningOut:false,
signUpError:null, 
};

const userReducer = (state = INITIAL_STATE , action) => {
const {type , payLoad} = action; 
switch(type)
    {
        case userActionTypes.SIGN_IN_START: 
            return {...state , isSigningIn:true}; 
        case userActionTypes.SIGN_IN_SUCCESS:
            return {...state , isSigningIn:false, currentUser:payLoad, isSignedIn:true};     
        case userActionTypes.SIGN_IN_FAILURE:
            return {...state, isSigningIn:false, sessionError:payLoad};  
        
        case userActionTypes.CHECK_SESSION_START: console.log("DEBUG:::");
            return {...state, isCheckingSession:true};
        case userActionTypes.CHECK_SESSION_SUCCESS:
            return {...state, isCheckingSession:false, currentUser:payLoad};
        case userActionTypes.CHECK_SESSION_FAILURE:
            return {...state, isCheckingSession:false, sessionError:payLoad};   
        case userActionTypes.SET_UNSUBSCRIBER:
            return {...state, unsubscriberFR:payLoad};
        case userActionTypes.SIGN_OUT_START:
             return {...state, isSigningOut:true};
        case userActionTypes.SIGN_OUT_SUCCESS:
             return {...state, isSigningOut:false, currentUser:null, };   
        case userActionTypes.SIGN_OUT_FAILURE:
             return {...state, isSigningOut:false, sessionError:payLoad}  

        default:
            return state; 
    }
}




export default userReducer; 