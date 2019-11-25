import cartTypes from "./cart.types.js";
import {addItemToCart} from "./carts.util.js"; 


const INITIAL_STATEE = {
    isDropdownHidden:true,
    items:[],
};

const cartReducer = (state = INITIAL_STATEE , action) =>
    {
        const {type , payLoad} = action; 
        switch(type)
            {
                case cartTypes.TOGGLE_CART_DROPDOWN: 
                    return {
                        ...state,
                        isDropdownHidden:!state.isDropdownHidden,
                    }
                case cartTypes.SHOW_CART_DROPDOWN: 
                      return {
                          ...state,
                          isDropdownHidden:false,
                      }
                
                case cartTypes.HIDE_CART_DROPDOWN: 
                    return {
                        ...state,
                        isDropdownHidden:true,
                    }
                
                 case cartTypes.ADD_ITEM_TO_CART: 
                    
                     return {
                         ...state,
                         items:addItemToCart(state.items, payLoad), 
                     }   
                     
                  case cartTypes.REMOVE_ITEM_FROM_CART:
                      return {
                          ...state,
                          items: state.items.slice().filter((item) => {
                              return item.id != payLoad;
                          }),
                      }   
                    
                 default:
                     return state;   
                      
            }

    }

    export default cartReducer; 