import React from "react"; 
import styled from "styled-components"; 
import {Form, FormControl, Button} from "react-bootstrap";

const Container = styled.div``;

const SearchBar = (props) => {
    const {compact , ...rest} = props; 
return(
    <Form inline className="" {...rest}>
        <FormControl type="text" placeholder="Search product..." className=" m-0 w-75" />
        {compact ? <></> : <Button className="ml-1" variant="outline-success">Search</Button>}
    </Form>  
);
}



export default SearchBar; 


/**
 * 
 */