import React, {useState} from "react"; 
import styled from "styled-components"; 
import {Form, FormControl, Button} from "react-bootstrap";
import {fetchAutocompleteAsync} from "../redux/shop/shop.actions.js"
import {useDispatch} from "react-redux";
import { useEffect } from "react";
const Container = styled.div``;

const SearchBar = (props) => {
    const {compact , ...rest} = props; 
    const [searchText , setSearchText] = useState("");
    const dispatch = useDispatch(); 
    
    const handleChange = e => {
        setSearchText(e.target.value); 
    }

    useEffect(() => {
        dispatch(fetchAutocompleteAsync(searchText))
    },[searchText])
return(
    <Form inline className="" {...rest}>
        <FormControl type="text" onChange={handleChange} placeholder="Search product..." className=" m-0 w-75" />
        {compact ? <></> : <Button className="ml-1" variant="outline-success">Search</Button>}
    </Form>  
);
}



export default SearchBar; 


/**
 * 
 */