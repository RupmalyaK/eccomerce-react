import React, {useState, useRef} from "react"; 
import styled from "styled-components"; 
import {Form, FormControl, Button} from "react-bootstrap";
import {fetchAutocompleteAsync} from "../redux/shop/shop.actions.js"
import {selectAutocompleteCollections} from "../redux/shop/shop.selector.js";
import {fetchItemsAsync} from "../redux/browse/browse.actions.js";
import {selectSortBy} from "../redux/browse/browse.selector.js";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {useHistory} from "react-router-dom";

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
    const [isOpen, setIsOpen] = useState(false); 
    const dispatch = useDispatch(); 
    const sortBy = useSelector(selectSortBy); 
    const items = useSelector(selectAutocompleteCollections);
    const history = useHistory(); 
    const suggestionBoxRef = useRef(null); 
    
    
    const handleChange = e => {
        setSearchText(e.target.value); 
        if (!e.target.value)
            {
                setIsOpen(false); 
            }
          else{
                if(!isOpen)
                    {
                        setIsOpen(true); 
                    }
              }
    }

    const handleSuggestionClick =  item => {
        setIsOpen(false);
        history.push(`/browse/item/${item.type}/${item._id}`);
    }

    const displaySuggestions = () => {
        if(items.length === 0)
            {
                return (<></>);
            }
        const suggestions = items.map(item => {
            return (
                <Suggestion key={item._id} style={{cursor:"pointer"}} onClick={e => handleSuggestionClick(item)}>
                    <h6 className="d-inline">{item.name}</h6>
                    <em style={{float:"right"}}>{item.type}</em>
                </Suggestion>
            );
        });
        return suggestions; 

    }

    const handleClickOutsideSuggestionBox = e => {
        if(suggestionBoxRef.current.contains(e.target))
            {
                setIsOpen(true);
                return;
            }
            setIsOpen(false); 
    }

    useEffect(() => {   
        document.addEventListener("mousedown", handleClickOutsideSuggestionBox);
        const handleUnmount =  () => {
            document.removeEventListener("mousedown", handleClickOutsideSuggestionBox);
        };
        return handleUnmount;
      }, [isOpen]);
      
    useEffect(() => {
        dispatch(fetchAutocompleteAsync(searchText));
    },[searchText]);

    const handleClickSearch = e => {
        dispatch(fetchItemsAsync({searchString:searchText, sortBy:sortBy || "relevance", isAsc:true}));
        if(isOpen)
            {
                setIsOpen(false);
            }
        history.push("/browse"); 
    }

return(
    <Form inline style={{position:"relative"}} {...rest}>
        <FormControl ref={suggestionBoxRef} type="text" onChange={handleChange} placeholder="Search product..." className=" m-0 w-75" />
        {compact ? <></> : <Button className="ml-1" onClick={handleClickSearch} variant="outline-success">Search</Button>}
        {(!isOpen || items.length === 0 )? <></> :(
        <SuggestionBox >
            {displaySuggestions()}
        </SuggestionBox>
        )}
    </Form>  
);
}



export default SearchBar; 

