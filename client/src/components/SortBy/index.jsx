
import React from "react"; 
import {ButtonToolbar, ToggleButtonGroup, ToggleButton} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {fetchItemsAsync} from "../../redux/browse/browse.actions.js";
import {selectSortBy, selectIsAsc} from "../../redux/browse/browse.selector.js";
import {Container} from "./style.jsx";



const SortBy =  () => {
    const sortBy = useSelector(selectSortBy); 
    const isAsc = useSelector(selectIsAsc);
    const dispatch = useDispatch();
    const handlesortByChange = val => {
        dispatch(fetchItemsAsync({sortBy:val, isAsc}));
    }
    const handleIsAscChange = val => {
        dispatch(fetchItemsAsync({sortBy,isAsc:val}));
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
                <ToggleButtonGroup type="radio" name="isAsc" defaultValue={isAsc} onChange={handleIsAscChange}>
                <ToggleButton value={true}variant="dark">Asc</ToggleButton>    
                <ToggleButton value={false} variant="dark">Dsc</ToggleButton>
                </ToggleButtonGroup>
            </ButtonToolbar>
            </Container>
        
    );
  }
  
export default SortBy; 