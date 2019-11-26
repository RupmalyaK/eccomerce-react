import {createSelector} from "reselect"; 



const selectCart = state => state.cart; 


const selectCartItems = createSelector(selectCart, (cart) =>{
    return cart.items;
});

const selectCartItemsTotalQuantity = createSelector(
    selectCartItems, (cartItems) => {
        const totalItemsQuantity = cartItems.reduce( (total , item) => {
            return total + item.quantity; 
        }, 0);
        return totalItemsQuantity;
    }
);

const selectIsDropdownHidden = createSelector(selectCart , cart => {
    return cart.isDropdownHidden;
});

const selectCartItemsTotalPrice = createSelector(selectCartItems, 
    cartItems => {
        const total = cartItems.reduce(
            (count, item ) => {
                return count + (item.price * item.quantity); 
            }
            ,0);
            return total; 
    });

export {
    selectCart,
    selectCartItems,
    selectCartItemsTotalQuantity,
    selectIsDropdownHidden,
    selectCartItemsTotalPrice,
};
