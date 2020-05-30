import React,{useState} from "react";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectCurrentItem} from "../../redux/browse/browse.selector.js"; 
import {setCurrentProfileAsync} from "../../redux/browse/browse.actions.js"; 
import {addNewBuyNowItem} from "../../redux/cart/cart.action.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import {useSelector} from "react-redux"; 
import {Col} from "react-bootstrap";
import Sizes from "../Sizes";
import Offers from "../Offers";
import Specifications from "../Specifications";
import {BuyNowButton} from "./style.jsx";


const ProductRightPanel = () => {
    const item = useSelector(selectCurrentItem); 
    const {isFeatured, name,price, type,offers,sizes } = item;  
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
    
    const handleClickSeller = e => {
        dispatch(setCurrentProfileAsync(item.seller,item.sellerId));
        history.push(`/profile/${item.sellerId}`);
    }

    return(
        <Col>
                     <div className="right-col">
                            <div className="primary-information" style={{display:"inline-block", width:"30vw"}}>
                                <h1 className="name" style={{textAlign:"center"}}>{name}</h1>
                                <span className="type" style={{float:"right", marginRight:"30px"}}><i>{type}</i></span>
                                <span className="seller" style={{float:"left",marginLeft:"10px"}}><i>Sold By <span style={{cursor:"pointer"}}  onClick={handleClickSeller} >{item.seller.displayName}</span></i></span>
                                <div style={{display:"inline-block", width:"30vw"}}>
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