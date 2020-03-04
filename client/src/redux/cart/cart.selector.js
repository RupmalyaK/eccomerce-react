import {createSelector} from "reselect"; 



export const selectCart = state => state.cart; 


export const selectCartItems = createSelector(selectCart, (cart) =>{
    return cart.items;
});

export const selectCartItemsTotalQuantity = createSelector(
    selectCartItems, (cartItems) => {
        const totalItemsQuantity = cartItems.reduce( (total , item) => {
            return total + item.quantity; 
        }, 0);
        return totalItemsQuantity;
    }
);

export const selectIsDropdownHidden = createSelector(selectCart , cart => {
    return cart.isDropdownHidden;
});

export const selectCartItemsTotalPrice = createSelector(selectCartItems, 
    cartItems => {
        const total = cartItems.reduce(
            (count, item ) => {
                return count + (item.price * item.quantity); 
            }
            ,0);
            return total; 
    });

 export const selectBuyNowItem = createSelector(selectCart, cart => cart.buyNowItem);    

