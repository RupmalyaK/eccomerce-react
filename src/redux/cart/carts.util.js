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


export {
    addItemToCart, 
}

