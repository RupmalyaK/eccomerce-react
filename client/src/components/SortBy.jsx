
import React, {useState, useEffect} from "react"; 
import styled from "styled-components"; 
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {fetchItemsAsync} from "../redux/browse/browse.actions.js"

const Container = styled.div`
    margin-bottom:20px;
    padding:20px;
    border:.5px solid black;
`;

const SortBy =  () => {
    const [value, setValue] = useState("price");
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchItemsAsync({sortBy:value}));
    }, [value]);

    
    const handleChange = val => {
        setValue(val);
    }
  
    return (
        <Container>
            <span>Sort By </span>
            <ButtonToolbar className="d-inline">
                <ToggleButtonGroup type="radio" name="options" defaultValue="price" onChange={handleChange}>
                <ToggleButton value="price">Price</ToggleButton>
                <ToggleButton value="name">Name</ToggleButton>
                <ToggleButton value="relevance">Relevance</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
            </Container>
        
    );
  }
  
export default SortBy; 