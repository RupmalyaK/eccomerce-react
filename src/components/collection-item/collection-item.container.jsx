import React from "react"; 
import {gql} from "apollo-boost";
import CollectionItem from "./collection-item.component.jsx";
import { useMutation  } from '@apollo/react-hooks';


const ADD_ITEM_TO_CART = gql`
mutation AddItemToCart($item:Item!){
    addItemToCart(item:$item) @client,
}
`;


const CollectionItemContainer = (props) => {
    const [addItemToCart] = useMutation(ADD_ITEM_TO_CART);
   
    return (
        <CollectionItem {...props} addItemToCart={item => addItemToCart({
            variables:{
                item,
            }
        })}/>
    );


}

export default CollectionItemContainer;

