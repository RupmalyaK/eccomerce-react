const INITIAL_STATE = {
currentUser:null,
};

const userReducer = (state = INITIAL_STATE , action) => {
    console.log("this is the payload", action.payLoad)
switch(action.type)
    {
        case "SET_CURRENT_USER":
            return {
                ...state,
                currentUser: action.payLoad,
            }


        default:
            return state; 
    }
}




export default userReducer; 