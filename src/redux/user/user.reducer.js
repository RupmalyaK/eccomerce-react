import userActionType from "./user.types.js";

const INITIAL_STATE = {
currentUser:null,
isFetching:false,
errorFetching:"",
unsubscriberFR:null, 
};

const userReducer = (state = INITIAL_STATE , action) => {
const {type , payLoad} = action; 
switch(type)
    {
        case userActionType.SIGN_IN_START: 
            return {...state , isFetching:true}; 

        case userActionType.SIGN_IN_SUCCESS:
            return {...state , isFetching:false, currentUser:payLoad};
            
        case userActionType.SIGN_IN_FAILURE:
            return {...state, error:payLoad};  
        
        case userActionType.SET_USER:
            return {...state, currentUser:payLoad};
        case userActionType.SET_UNSUBSCRIBER:
            return {...state, unsubscriberFR:payLoad};
        default:
            return state; 
    }
}




export default userReducer; 