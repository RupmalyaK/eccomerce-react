import cartTypes from "./cart.types"; 

export const toggleCartDropdown = () => {
    return {
        type:cartTypes.TOGGLE_CART_DROPDOWN,
        payLoad:null, 
    }
}

export const hideCartDropdown = () => {
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
 
 export const addNewBuyNowItem = (item) => {
    item.quantity = 1;
     return{
        type:cartTypes.ADD_NEW_BUY_NOW_ITEM,
        payLoad:item,
     };
 }

 export const addBuyNowItem = () => {
     return {
         type:cartTypes.ADD_BUY_NOW_ITEM,
     };
 }

 export const removeBuyNowItem = () => {
     return {
        type:cartTypes.REMOVE_BUY_NOW_ITEM,
     };
 }

