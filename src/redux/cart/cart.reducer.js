import cartTypes from "./cart.types.js";
const INITIAL_STATEE = {
    isDropdownHidden:true,
};

const cartReducer = (state = INITIAL_STATEE , action) =>
    {
        const {type , payLoad} = action; 
        console.log(state);
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
                    
                 default:
                     return state;   
                      
            }

    }

    export default cartReducer; 