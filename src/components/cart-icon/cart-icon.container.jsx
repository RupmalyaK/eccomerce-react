import React from "react"; 
import {gql} from "apollo-boost";
import CartIcon from "./cart-icon.component.jsx";
import { useMutation, useQuery } from '@apollo/react-hooks';
import Spinner from "../spinner/spinner.component.jsx"; 

const TOGGLE_CART_DROPDOWN = gql`
 mutation ToggleCartDropdown
    {
        toggleCartDropdown @client

        
    }
`;

const GET_ITEMS_QUANTITY = gql`
    {
        itemCount @client,
    }
`;

const CartIconContainer = () => {
    const [toggleCartDropdown] = useMutation(TOGGLE_CART_DROPDOWN );
    const {loading, error, data} = useQuery(GET_ITEMS_QUANTITY);
    console.log(data.itemCount);
    return (
        <CartIcon toggleCartHidden={toggleCartDropdown} itemCount={data.itemCount}/>
    );
}

export default CartIconContainer; 

