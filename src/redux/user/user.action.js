const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        payLoad:user,
    }
}


export default setCurrentUser;