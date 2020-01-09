export const addItemToCart = (cartItems , newCartItem) => { 
    const cartItemExist = cartItems.find(cartItem => cartItem._id === newCartItem._id); 
     if (cartItemExist)
        {
            const newCartItems = cartItems.map(item => {
                if (item._id === newCartItem._id)
                    {
                        return {...item , quantity:item.quantity + 1}; 
                    }
                    return item; 
            });
            return newCartItems; 
        }   
      
        return [...cartItems, {...newCartItem, quantity: 1}  ]
}

export const removeItemFromCart = (cartItems , _id) =>
    {
        const existingItem = cartItems.find(item => item._id === _id);
        if (existingItem.quantity > 1)
            {
                const newCartItems = cartItems.map(item => {
                        if (item._id === _id)
                            {
                                return {...item , quantity:item.quantity - 1}
                            }
                            return item; 
                         });
                return newCartItems; 
            }
          if (existingItem.quantity === 1)
            {
                
                const newCartItems = cartItems.filter(item => item._id !== _id)
                return newCartItems; 
            }  
            return cartItems;
    }

 export const removeItemFromCartCompletely = (cartItems , _id) =>
    {
        const newItemsArr = cartItems.filter(item => item._id !== _id);
        return newItemsArr; 
    }   

