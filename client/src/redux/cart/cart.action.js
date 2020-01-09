import cartTypes from "./cart.types"; 

export const toggleCartDropdown = () => {
    return {
        type:cartTypes.TOGGLE_CART_DROPDOWN,
        payLoad:null, 
    }
}

export const hiddenCartDropdown = () => {
    return {
        type:cartTypes.HIDE_CART_DROPDOWN,
        payLoad:null,
    }
}

export const showCartDropdown = () => {
    return {
        type:cartTypes.SHOW_CART_DROPDOWN,
        payLoad:null
    }
}

export const addItemToCart= (item) => {
    return {
        type:cartTypes.ADD_ITEM_TO_CART,
        payLoad:item,
    }
}

export const removeItemFromCart = (_id) =>
    {
        return {
            type:cartTypes.REMOVE_ITEM_FROM_CART,
            payLoad:_id,
        }
    }

export const removeItemFromCartCompletely = (_id) => {
     return {
         type:cartTypes.REMOVE_ITEM_FROM_CART_COMPLETELY,
         payLoad:_id,
     }
 }   

