import userActionType from "./user.types.js";
const INITIAL_STATE = {
currentUser:null,
};

const userReducer = (state = INITIAL_STATE , action) => {
    console.log("this is the payload", action.payLoad)
switch(action.type)
    {
        case userActionType.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payLoad,
            }


        default:
            return state; 
    }
}




export default userReducer; 