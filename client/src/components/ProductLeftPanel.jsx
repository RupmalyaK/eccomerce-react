import React, {useState, useEffect} from "react"; 
import {useDispatch,useSelector} from "react-redux";
import styled from "styled-components"; 
import {Row,Col} from "react-bootstrap";
import {addItemToCart} from "../redux/cart/cart.action.js";
import {selectCurrentItem} from "../redux/browse/browse.selector.js";
import CustomButton from "../components/CustomButton.jsx";



const AddToCartButton = styled(CustomButton)`
`; 


const ProductLeftPanel = () => {
    const item = useSelector(selectCurrentItem);
    const {primaryImageUrl , secondaryImageUrls} = item; 
    const [mainImageUrl, setMainImageUrl]= useState(primaryImageUrl); 
    const dispatch = useDispatch(); 

    const allImages = [primaryImageUrl , ...secondaryImageUrls, "https://i.picsum.photos/id/1/5616/3744.jpg","https://i.picsum.photos/id/100/2500/1656.jpg","https://i.picsum.photos/id/1005/5760/3840.jpg","https://picsum.photos/id/1015/6000/4000"];
    useEffect(() => {
        setMainImageUrl(primaryImageUrl);
        }, [primaryImageUrl]);

    const handleClickAddToCart = e => {
        dispatch(addItemToCart(item));
    } 
    
    const handleMouseEnterImageButton = e => {
        setMainImageUrl(e.target.src || e.target.children.src);
    }

    const displayAllImages = () => {
        const allImagesElements = allImages.map((imageUrl,index) => {
             return(
                 <div className="img-button" key={index}>
                       <img onMouseOver={handleMouseEnterImageButton } className= "secondary-img" src={imageUrl} alt="secondaryImage"/>  
                 </div> 
             );
         })
         return allImagesElements; 
     }

    return(
        <Col xs={6}> 
                <div className="left-col">
                    <Row>
                        <Col sm={1} className="padding-0">
                            <div className="images-collection">
                                {displayAllImages()}
                            </div>
                        </Col>
                        <Col sm={11}>
                            <img className="primary-img" src={mainImageUrl} alt="primary image"/>
                            <div className="addtocart-wishlist-button" style={{marginTop:"5px",display:"flex",width:"70%",justifyContent:"center"}}>
                                <AddToCartButton onClick = {handleClickAddToCart} style={{display:"block"}}>Add To Cart</AddToCartButton>
                                <AddToCartButton  style={{display:"block", marginLeft:"10px"}}>Add to Wishlist</AddToCartButton>
                            </div>
                            
                        </Col>
                    </Row>
                </div>     
                </Col>
    );
}

export default ProductLeftPanel;