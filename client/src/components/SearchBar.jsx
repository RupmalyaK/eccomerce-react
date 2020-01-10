import React, {useState} from "react"; 
import styled from "styled-components"; 
import {Form, FormControl, Button} from "react-bootstrap";
import {fetchAutocompleteAsync} from "../redux/shop/shop.actions.js"
import {selectAutocompleteCollections} from "../redux/shop/shop.selector.js";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
const Container = styled.div``;

const SuggestionBox = styled.div`
background:white;
width:450px;
height:240px;
bottom:-230px;
position:absolute;
overflow:auto;
display: ${props => props.isHide ? "none" : "block"};
`;

const Suggestion = styled.div
`
border-bottom:1px solid black;
padding:10px 10px 5px 10px;
`; 

const SearchBar = (props) => {
    const {compact , ...rest} = props; 
    const [searchText , setSearchText] = useState("");
    const dispatch = useDispatch(); 
    const items = useSelector(selectAutocompleteCollections);
    
   
    const handleChange = e => {
        setSearchText(e.target.value); 
    }

    const displaySuggestions = () => {
        if(items.length === 0)
            {
                return (<></>);
            }
        const suggestions = items.map(itemName => {
            return (
                <Suggestion key={itemName._id}>
                    <h6 className="d-inline">{itemName.name}</h6>
                    <em style={{float:"right"}}>{itemName.type}</em>
                </Suggestion>
            );
        });
        return suggestions; 

    }

    useEffect(() => {
        dispatch(fetchAutocompleteAsync(searchText))
    },[searchText])
return(
    <Form inline style={{position:"relative"}} {...rest}>
        <FormControl type="text" onChange={handleChange} placeholder="Search product..." className=" m-0 w-75" />
        {compact ? <></> : <Button className="ml-1" variant="outline-success">Search</Button>}
        {(searchText.length === 0) ? <></> :(<SuggestionBox>
            {displaySuggestions()}
        </SuggestionBox>) }
    </Form>  
);
}



export default SearchBar; 

