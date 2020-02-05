import React, {useState, useEffect} from "react"; 
import styled from "styled-components";
import {selectCurrentItem} from "../redux/browse/browse.selector.js"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../components/CustomButton";
import {useSelector} from "react-redux"; 
import {Row, Col} from "react-bootstrap";
import ReviewsAndRatings from "../components/ReviewsAndRatings.jsx";

const Container = styled.div`
margin:20px;
.padding-0{
    padding-right:0;
    padding-left:0;
}


.left-col{
    display:flex;
    flex-direction:column;
}
.img-button{
    border:3px solid black;
    margin-bottom:5px;
    cursor:pointer;
    &:hover {
        border-color:white;
        }
    height:90px;
    width:60px;    
}
.secondary-img {
    width:100%;
    height:100%;
}
.primary-img{
    height:700px;
    width:70%;
}
`;

const AddToCartButton = styled(CustomButton)`
`; 


const Product = props => {
    const item = useSelector(selectCurrentItem); 
    const {primaryImageUrl, /*secondaryImageUrls, */isFeatured, name, dateCreated:dateAdded, averageRating,reviews,price, type,offers } = item;  
  //  const {isFreeShipping,isZeroEmi,isFastDelivery} = offers; 
    const [mainImageUrl, setMainImageUrl]= useState(primaryImageUrl); 
    const secondaryImageUrls = [primaryImageUrl];
    const allImages = [primaryImageUrl , ...secondaryImageUrls, "https://i.picsum.photos/id/1/5616/3744.jpg","https://i.picsum.photos/id/100/2500/1656.jpg","https://i.picsum.photos/id/1005/5760/3840.jpg","https://picsum.photos/id/1015/6000/4000"];
    

    const handleMouseEnterImageButton = e => {
        console.log(e.target.src || e.target.children[0].src);
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
        <Container> 
            <Row>
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
                                     <AddToCartButton  style={{display:"block"}}>Add To Cart</AddToCartButton>
                                     <AddToCartButton  style={{display:"block", marginLeft:"10px"}}>Add to Wishlist</AddToCartButton>
                                    </div>
                                    
                               </Col>
                            </Row>
                        </div> 
                        
                </Col>
                <Col>
                     <div className="right-col">
                            <div className="primary-information" style={{background:"coral", display:"inline-block", width:"30vw"}}>
                                <h1 className="name" style={{textAlign:"center"}}>{name}</h1>
                                <span className="type" style={{float:"right", marginRight:"30px"}}><i>{type}</i></span>
                                <span className="seller" style={{float:"left",marginLeft:"10px"}}><i>Sold By: {"Rupmalya Kumar"}</i></span>
                                <div style={{background:"red"}} style={{display:"inline-block", width:"30vw", background:"red"}}>
                                 {isFeatured ? ( <div className="featured" style={{float:"right",marginRight:"10px"}}>
                                    <FontAwesomeIcon icon={faCheckCircle}/><span>Featured!</span>   
                                </div> ): <></>}   
                            </div>
                        </div>
                        <hr/>
                            <span style={{fontSize:"30px"}} className="price">Price:{price}$</span>  
                            <div className="available-offers">
                                <span style={{display:"block"}}>Available offers:</span>
                                {/*isFreeShipping? 
                                <span>No Cost in shipping.</span>
                                :<></>*/}
                                
                                     
                            </div>                       
                     </div>   
                </Col>
             </Row>
             <ReviewsAndRatings reviews={reviews} averageRating={averageRating}/>
        </Container>
    );
}

export default Product; 