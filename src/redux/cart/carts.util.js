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
        const newCartItems = cartItems.filter(item => {
            if( item.id === id)
                {
                    if ((item.quantiy >= 1) )
                        {
                            return  {...item, quantity: item.quantiy - 1}; 
                        }
                       return;  
                }
               return item;      
        });
    }

export {
    addItemToCart, 
    removeItemFromCart,
}

