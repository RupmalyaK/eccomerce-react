import React from "react"; 
import styled from "styled-components"; 
import {Form, FormControl, Button} from "react-bootstrap";

const Container = styled.div``;

const SearchBar = (props) => {
return(
    <Form inline className="" {...props}>
        <FormControl type="text" placeholder="Search product..." className="mr-sm-2 m-0 w-50" />
        <Button variant="outline-success">Search</Button>
    </Form>  
);
}



export default SearchBar; 


/**
 * 
 */