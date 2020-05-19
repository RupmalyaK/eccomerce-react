import React,{useState} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectCurrentItem} from "../redux/browse/browse.selector.js"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../components/CustomButton";
import {useSelector} from "react-redux"; 
import {Row, Col} from "react-bootstrap";
import ReviewsAndRatings from "../components/ReviewsAndRatings.jsx";
import {addItemToCart, addNewBuyNowItem} from "../redux/cart/cart.action.js";
import ProductLeftPanel from "./ProductLeftPanel.jsx";
import Sizes from "./Sizes.jsx";
import Offers from "./Offers.jsx";
import Specifications from "./Specifications.jsx";

const BuyNowButton = styled(CustomButton)`
margin-top:10px;
margin-buttom:10px;
`; 

const ProductRightPanel = () => {
    const item = useSelector(selectCurrentItem); 
    const {isFeatured, name, dateCreated:dateAdded, averageRating,reviews,price, type,offers,sizes } = item;  
    const history = useHistory();
    const dispatch = useDispatch(); 
    
    const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0] : null);

    const handleClickSize = (e) => {
        e.preventDefault();
        setSelectedSize(e.currentTarget.id);
    }

    const handleClickBuyNow = e => {
        dispatch(addNewBuyNowItem(item,selectedSize));
        history.push("/checkout/true");
    }
  
    return(
        <Col>
                     <div className="right-col">
                            <div className="primary-information" style={{display:"inline-block", width:"30vw"}}>
                                <h1 className="name" style={{textAlign:"center"}}>{name}</h1>
                                <span className="type" style={{float:"right", marginRight:"30px"}}><i>{type}</i></span>
                                <span className="seller" style={{float:"left",marginLeft:"10px"}}><i>Sold By: {"Rupmalya Kumar"}</i></span>
                                <div style={{background:"red"}} style={{display:"inline-block", width:"30vw"}}>
                                 {isFeatured ? ( <div className="featured" style={{float:"right",marginRight:"10px"}}>
                                    <FontAwesomeIcon icon={faCheckCircle}/><span>Featured!</span>   
                                </div> ): <></>}   
                            </div>
                        </div>
                        <hr/>
                            <Sizes sizes={sizes} selectedSize={selectedSize} handleClickSize={handleClickSize}/>
                            <span style={{fontSize:"30px"}} className="price">Price:{price}$</span> 
                            <Offers offers={offers}/> 
                            <BuyNowButton onClick={handleClickBuyNow}>Buy Now</BuyNowButton>
                            <Specifications sizes={sizes} type={type}/>
                     </div>   
                </Col>
    );
}

export default ProductRightPanel; 