
import React, {useState, useEffect} from "react"; 
import styled from "styled-components"; 
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchItemsAsync} from "../redux/browse/browse.actions.js";
import {selectSortBy, selectIsAsc} from "../redux/browse/browse.selector.js";


const Container = styled.div`
    margin-bottom:20px;
    padding:20px;
    border:.5px solid black;

    .is-asc {
        float:right !important;
        
    }
`;

const SortBy =  () => {
    const sortBy = useSelector(selectSortBy); 
    const isAsc = useSelector(selectIsAsc);
    
    const [toggleSortByValue, setToggleSortByValue] = useState("relevance");
    const [toggleIsAscValue, setToggleIsAscValue] = useState("true");

 
    const dispatch = useDispatch();
    
    useEffect(() => {
        console.log(toggleIsAscValue);
        dispatch(fetchItemsAsync({sortBy:toggleSortByValue, isAsc:toggleIsAscValue}));
    }, [toggleSortByValue, toggleIsAscValue]);

    
    const handlesortByChange = val => {
        setToggleSortByValue(val);
    }

    const handleIsAscChange = val => {
        setToggleIsAscValue(val); 
    }
    
  
    return (
        <Container>
            <span>Sort By </span>
            <ButtonToolbar className="d-inline sort-by">
                <ToggleButtonGroup type="radio" name="sortBy" defaultValue={sortBy || "relevance"} onChange={handlesortByChange} >
                <ToggleButton value="relevance"  variant="dark">Relevance</ToggleButton>    
                <ToggleButton value="price" variant="dark">Price</ToggleButton>
                <ToggleButton value="name" variant="dark">Name</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>

            <ButtonToolbar className="d-inline is-asc">
                <ToggleButtonGroup type="radio" name="isAsc" defaultValue={isAsc || "true"} onChange={handleIsAscChange}>
                <ToggleButton value="true" variant="dark">Asc</ToggleButton>    
                <ToggleButton value="false" variant="dark">Dsc</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
            </Container>
        
    );
  }
  
export default SortBy; 