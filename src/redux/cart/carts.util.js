const addItemToCart = (cartItems , newCartItem) => { 
    const cartItemExist = cartItems.find(cartItem => cartItem.id === newCartItem.id); 
     if (cartItemExist)
        {
            const newCartItems = cartItems.map(item => {
                if (item.id === newCartItem.id)
                    {
                        return {...item , quantity:item.quantity + 1}; 
                    }
                    return item; 
            });
            return newCartItems; 
        }   
 
        return [...cartItems, {...newCartItem, quantity: 1}  ]
}

const removeItemFromCart = (cartItems , id) =>
    {
        const existingItem = cartItems.find(item => item.id === id);
        if (existingItem.quantity > 1)
            {
                const newCartItems = cartItems.map(item => {
                        if (item.id === id)
                            {
                                return {...item , quantity:item.quantity - 1}
                            }
                            return item; 
                         });
                return newCartItems; 
            }
          if (existingItem.quantity === 1)
            {
                
                const newCartItems = cartItems.filter(item => item.id !== id)
                return newCartItems; 
            }  
            return cartItems;
    }

 const removeItemFromCartCompletely = (cartItems , id) =>
    {
        const newItemsArr = cartItems.filter(item => item.id !== id);
        return newItemsArr; 
    }   
export {
    addItemToCart, 
    removeItemFromCart,
    removeItemFromCartCompletely, 
}

