import {gql} from "apollo-boost"; 
import {addItemToCart, getItemsQuantity} from "./cart.utils.js";
export const typeDefs = gql`
extend type Item{
    quantity:int,
}
extend type Mutation{
    ToggleCartDropdown: Boolean!,
    AddItemToCart(item:Item!):[Item]!,
}
`;

const GET_CART_DROPDOWN_HIDDEN = gql`
{
    cartDropdownHidden @client
}
`;

const GET_CART_ITEMS= gql`
    {
        cartItems @client,
    }
`;

const GET_ITEMS_QUANTITY = gql`
    {
        itemCount @client,
    }
`;

export const resolvers = {
    Mutation: {

      toggleCartDropdown: (root , args, {cache}) => {
           const {cartDropdownHidden} = cache.readQuery({
                query:GET_CART_DROPDOWN_HIDDEN,
            });
            cache.writeQuery({
                query:GET_CART_DROPDOWN_HIDDEN,
                data:{cartDropdownHidden: !cartDropdownHidden}
            });
         
          return !cartDropdownHidden;
       } ,

       addItemToCart: (root , args , context) => {
           const {item} = args;
           const {cache} = context; 
           const {cartItems} = cache.readQuery({
               query:GET_CART_ITEMS,
           });
        
           const newCartItems = addItemToCart(cartItems, item);
           cache.writeQuery(
               {
                query:GET_CART_ITEMS,
                data:{
                    cartItems:newCartItems,
                },
               }
           )
           cache.writeQuery(
               {
                   query:GET_ITEMS_QUANTITY,
                   data:{
                       itemCount:getItemsQuantity(newCartItems),
                   },
               }
           );
               return newCartItems; 
       }
   
    },
}
//ToggleCartDropdown  toggleCartDropdown  ToggleCartDropdown