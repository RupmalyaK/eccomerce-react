import userActionTypes from "./user.types.js";
export const setCurrentUser = user => {
    return {
        type: userActionTypes.SET_CURRENT_USER,
        payLoad:user,
    }
}


