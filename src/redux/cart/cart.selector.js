import {createSelector} from "reselect"; 


const selectCart = state => state.cart; 


const selectCartItems = createSelector([selectCart], (cart) =>{
    return cart.items;
});

const selectCartItemsTotalQuantity = createSelector(
    [selectCartItems] , (cartItems) => {
        const totalItemsQuantity = cartItems.reduce( (total , item) => {
            return total + item.quantity; 
        }, 0);
        return totalItemsQuantity;
    }
);


export {
    selectCart,
    selectCartItems,
    selectCartItemsTotalQuantity,
};
