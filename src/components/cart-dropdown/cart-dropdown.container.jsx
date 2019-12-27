import React from "react"; 
import {gql} from "apollo-boost";
import CartDropdown from "./cart-dropdown.component.jsx";
import { useQuery, useMutation } from '@apollo/react-hooks';
import Spinner from "../spinner/spinner.component.jsx"; 

const TOGGLE_CART_DROPDOWN = gql`
 mutation ToggleCartDropdown
    {
        toggleCartDropdown @client

        
    }
`;


const GET_CART_ITEMS= gql`
    {
        cartItems @client,
    }
`;

const CartDropdownContainer = () => {
    const [toggleCartDropdown] = useMutation(TOGGLE_CART_DROPDOWN)
    const {loading , error, data} = useQuery(GET_CART_ITEMS);
    console.log(data);
    return (<CartDropdown toggleCartDropdown = {toggleCartDropdown} cartItems = {data.cartItems}/>);

}

export default CartDropdownContainer; 
