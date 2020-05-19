import React, {useState} from "react"; 
import {Row,Col,Form,Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"; 
import {fetchItemsAsync} from "../../redux/browse/browse.actions.js";
import {selectCategories, selectIsFeatured, selectPriceRange} from "../../redux/browse/browse.selector.js";
import Container from "./style.jsx";



const AdvanceSearch = props => {

    const [categories , setCategories] = useState([]); 
    const [priceRange, setPriceRange] = useState([]); 
    const [isFeatured, setIsFeatured] = useState(false); 

    const storeIsFeatured = useSelector(selectIsFeatured);
    const storePriceRange = useSelector(selectPriceRange); 
    const storeCategories = useSelector(selectCategories); 

   
    const dispatch = useDispatch();


    const handleSubmit = e => {
        e.preventDefault();
       dispatch(fetchItemsAsync({
            categories: categories, 
            priceRange: priceRange,
            isFeatured: isFeatured
        }));
    }

    const addCategory = category => { 
        if(categories.indexOf(category) === -1)
            {
                
                const newCategories = [...categories, category]; 
                setCategories(newCategories); 
            }   
    }

    const removeCategory = category => {
        if(categories.indexOf(category) !== -1 )
            {
                const newCategories = categories.filter(elem => elem !== category );
                setCategories(newCategories);
            }
    }

    const handleCategoryChange = e => {
        const checked = e.target.checked;
        const func = checked ? addCategory : removeCategory; 

        switch(e.target.id)
            {
                case "hats-check":
                                func("hats");            
                                break;
                case "jackets-check":
                                func("jackets");  
                                break;
                case "womens-check":
                                func("womens");  
                                break;
                case "mens-check":
                                func("mens");  
                                break; 
                case "shoes-check":
                                func("sneakers");  
                                break;
                default: break;                                                                             
            }
        }
    
    const handlePriceRangeChange = e => {
        const newPriceRange = [...priceRange]; 
        const value = e.target.value; 
        switch(e.target.id)
            {
                case "priceMin":
                                newPriceRange[0] = value;
                                setPriceRange(newPriceRange); 
                                break;
                case "priceMax":
                                newPriceRange[1] = value;
                                setPriceRange(newPriceRange);
                                break;
                default: 
                        break;                                     
            }
    }   
    
    const handleIsFeaturedChange = e => {
        setIsFeatured(e.target.checked); 
    }

    const isStoreCategoryPresent = category => !(storeCategories.indexOf(category) === -1);

    return (
    <Container>
        <h3 className="heading">Advance Search</h3>
       
        <Form className="form" onSubmit={handleSubmit}>
            <fieldset>
                <Form.Group as={Row} onChange={handleCategoryChange} >
                <Form.Label as="legend">
                    Categories
                </Form.Label>
                <Col sm={12} >
                    <Form.Check
                    defaultChecked = {isStoreCategoryPresent("hats")}
                    type="checkbox"
                    label="Hats"
                    name="formHorizontalcheckboxs"
                    id="hats-check"
                    />
                    <Form.Check
                    defaultChecked = {isStoreCategoryPresent("jackets")}
                    type="checkbox"
                    label="Jackets"
                    name="formHorizontalcheckboxs"
                    id="jackets-check"
                    />
                    <Form.Check
                    defaultChecked = {isStoreCategoryPresent("womens")}
                    type="checkbox"
                    label="Womens"
                    name="formHorizontalcheckboxs"
                    id="womens-check"
                    />
                     <Form.Check
                    defaultChecked = {isStoreCategoryPresent("mens")}
                    type="checkbox"
                    label="Mens"
                    name="formHorizontalcheckboxs"
                    id="mens-check"
                    />
                     <Form.Check
                    defaultChecked = {isStoreCategoryPresent("sneakers")}
                    type="checkbox"
                    label="Shoes"
                    name="formHorizontalcheckboxs"
                    id="shoes-check"
                    />
                </Col>
                </Form.Group>
            </fieldset>

            <Form.Group as={Row}>
                <Form.Label as={Col} sm="6">
                        Featured
                </Form.Label>
                <Col sm="6">
                <Form.Check 
                        defaultChecked = {storeIsFeatured}
                        onChange = {handleIsFeaturedChange}
                        type="checkbox"
                        name="formHorizontalcheckboxs"
                        id="featured-check"
                        />
                </Col>
                
                </Form.Group>
            <Row onChange={handlePriceRangeChange}> 
                <p as={Col} sm="3">Price Range</p>    
                <Form.Group as={Col} sm= "3" controlId="priceMin">
                    <Form.Control 
                    defaultValue = {storePriceRange[0]}
                    type="higherThanPrice" placeholder="0" />
                </Form.Group>
                -
                <Form.Group as={Col} sm="3" controlId="priceMax">
                    <Form.Control 
                    defaultValue = {storePriceRange[1]}
                    type="lesserThanPrice" placeholder="0" />
                </Form.Group>
            </Row> 
               <Button variant="dark" className="search-button" type="submit" >Filter</Button>
         </Form>
            
        
    </Container>);
}

export default AdvanceSearch;
