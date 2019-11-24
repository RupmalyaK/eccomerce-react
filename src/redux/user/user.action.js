import userActionTypes from "./user.types.js";
const setCurrentUser = user => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payLoad:user,
    }
}


export default setCurrentUser;