import cartTypes from "./cart.types"; 

const toggleCartDropdown = () => {
    return {
        type:cartTypes.TOGGLE_CART_DROPDOWN,
        payLoad:null, 
    }
}

const hiddenCartDropdown = () => {
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

const addItemToCart= (item) => {
    return {
        type:cartTypes.ADD_ITEM_TO_CART,
        payLoad:item,
    }
}

const removeItemFromCart = (id) =>
    {
        return {
            type:cartTypes.REMOVE_ITEM_FROM_CART,
            payLoad:id,
        }
    }

    export {
toggleCartDropdown,
hiddenCartDropdown,
showCartDropdown,
addItemToCart,
removeItemFromCart,
};
