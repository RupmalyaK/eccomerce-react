import cartTypes from "./cart.types"; 

const toggleCartDropdown = () => {
    return {
        type:cartTypes.TOGGLE_CART_DROPDOWN,
        payLoad:null, 
    }
}

const hiddeCartDropdown = () => {
    return {
        type:cartTypes.HIDE_CART_DROPDOWN,
        payLoad:null,
    }
}

const showCartDropdown = () => {
    return {
        type:cartTypes.SHOW_CART_DROPDOWN,
        payLoad:null
    }
}

export {
toggleCartDropdown,
hiddeCartDropdown,
showCartDropdown,
};
