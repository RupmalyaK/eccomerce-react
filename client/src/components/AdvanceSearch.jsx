import React, { useState, useEffect } from "react"; 
import styled from "styled-components"; 
import {Row,Col,Form,Button} from "react-bootstrap";
import {useDispatch} from "react-redux"; 
import {fetchItemsAsync} from "../redux/browse/browse.actions.js"

const Container = styled.div`
height:450px;
width:29%;
position:relative; 
display:block;
border:0.1px solid black;
.heading{
    text-align:center;
    margin-top:30px;
    }
.form{
    margin-left:30px;
} 

.search-button{
    padding:10px 20px;
}
`;

const AdvanceSearch = props => {

    const [categories , setCategories] = useState([]); 
    const [priceRange, setPriceRange] = useState([]); 
    const [isFeatured, setIsFeatured] = useState(false); 
    useEffect(() => {
        console.log(categories)
    }, [categories])
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
                const newCategories = categories.filter(elem => elem != category );
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

    return (
    <Container>
        <h3 className="heading">Advance Search</h3>
        <div className="content">
        <Form className="form" onSubmit={handleSubmit}>
            <fieldset>
                <Form.Group as={Row} onChange={handleCategoryChange} >
                <Form.Label as="legend">
                    Categories
                </Form.Label>
                <Col sm={10} >
                    <Form.Check
                    type="checkbox"
                    label="Hats"
                    name="formHorizontalcheckboxs"
                    id="hats-check"
                    />
                    <Form.Check
                    type="checkbox"
                    label="Jackets"
                    name="formHorizontalcheckboxs"
                    id="jackets-check"
                    />
                    <Form.Check
                    type="checkbox"
                    label="Womens"
                    name="formHorizontalcheckboxs"
                    id="womens-check"
                    />
                     <Form.Check
                    type="checkbox"
                    label="Mens"
                    name="formHorizontalcheckboxs"
                    id="mens-check"
                    />
                     <Form.Check
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
                <Form.Control type="higherThanPrice" placeholder="0" />
            </Form.Group>
            -
            <Form.Group as={Col} sm="3" controlId="priceMax">
                <Form.Control type="lesserThanPrice" placeholder="0" />
            </Form.Group>
            </Row>

            <Form.Group as={Row}>
                <Col sm={{ span: 6, offset: 2 }}>
                <Button className="search-button" type="submit">Search</Button>
                </Col>
            </Form.Group>
         </Form>
            
        </div>
        
    </Container>);
}

export default AdvanceSearch;
/** <div className="category">
                <p>Category</p>
            </div> */