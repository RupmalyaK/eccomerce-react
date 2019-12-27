import React from "react"; 
import {gql} from "apollo-boost";
import Header from "./header.component.jsx";
import { useQuery } from '@apollo/react-hooks';
import Spinner from "../spinner/spinner.component.jsx"; 


const GET_CART_DROPDOWN_HIDDEN = gql`
{
    cartDropdownHidden 
}
`;

const CartIconContainer = () => {
    const {loading , error , data }= useQuery(GET_CART_DROPDOWN_HIDDEN);
    if(error)
        {
            console.log(error);
            return;
        }
        
    return (
        <Header hidden = {data.cartDropdownHidden} />
    );
}

export default CartIconContainer;