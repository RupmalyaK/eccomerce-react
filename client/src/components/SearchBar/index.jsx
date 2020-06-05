import React, {useState, useRef} from "react"; 
import {FormControl} from "react-bootstrap";
import {fetchAutocompleteAsync} from "../../redux/shop/shop.actions.js"
import {selectAutocompleteCollections} from "../../redux/shop/shop.selector.js";
import {fetchItemsAsync, setCurrentItemAsync} from "../../redux/browse/browse.actions.js";
import {selectSortBy} from "../../redux/browse/browse.selector.js";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {useHistory} from "react-router-dom";
import {CustomForm,SuggestionBox,Suggestion} from "./style.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";




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
        dispatch(setCurrentItemAsync(item));
        history.push(`/browse/item/${item.type}/${item._id}/`);
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

    const handleEnterPress = e => {
        if(!items[0])
            {
                return;
            }
        if (e.key === "Enter") {
        dispatch(setCurrentItemAsync(items[0]));    
        history.push(`/browse/item/${items[0].type}/${items[0]._id}/`);
        }
    }

return(
    <CustomForm inline  {...rest} ref={suggestionBoxRef}>
        <FormControl  type="text" onChange={handleChange} onKeyPress={handleEnterPress}  placeholder="Search ..." className=" m-0 w-75 text-input"/>
        <div className="icon-wrapper">
           <FontAwesomeIcon icon={faSearch} className="icon" onClick={handleClickSearch}/>
        </div>
        {(!isOpen || items.length === 0 )? <></> :(
        <SuggestionBox >
            {displaySuggestions()}
        </SuggestionBox>
        )}
    </CustomForm>  
);
}



export default SearchBar; 

/**
 *  <Form inline  {...rest} ref={suggestionBoxRef}>
        <FormControl  type="text" onChange={handleChange} onKeyPress={handleEnterPress}  placeholder="Search product..." className=" m-0 w-75" />
        {compact ? <></> : <Button className="ml-1"  onClick={handleClickSearch} variant="outline-success">Search</Button>}
        {(!isOpen || items.length === 0 )? <></> :(
        <SuggestionBox >
            {displaySuggestions()}
        </SuggestionBox>
        )}
    </Form> 
 */

