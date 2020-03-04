import React, {useState, useEffect} from "react"; 
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

.max-width{
    max-width:550px;
}
.sizes{
    display:flex;
    margin-bottom:20px;
    cursor:pointer;
}

.size{
display:flex;
border-radius:100%;
border:1px solid inherit;
box-shadow:10px #888888;
margin-left:10px;
width:50px;
height:50px;
justify-content:center;
align-items:center;
}
`;



const AddToCartButton = styled(CustomButton)`
`; 

const BuyNowButton = styled(CustomButton)`
margin-top:10px;
margin-buttom:10px;
`; 


const Product = props => {
    const item = useSelector(selectCurrentItem); 
    const {primaryImageUrl, /*secondaryImageUrls,*/isFeatured, name, dateCreated:dateAdded, averageRating,reviews,price, type,offers,sizes } = item;  
    const [selectedSize, setSelectedSize] = useState(item.sizes ? item.sizes[0] : null);
    const history = useHistory();
    const dispatch = useDispatch(); 
    console.log("DEBUGOO", selectedSize);
    
    const [mainImageUrl, setMainImageUrl]= useState(primaryImageUrl); 
    const secondaryImageUrls = [primaryImageUrl];
    const allImages = [primaryImageUrl , ...secondaryImageUrls, "https://i.picsum.photos/id/1/5616/3744.jpg","https://i.picsum.photos/id/100/2500/1656.jpg","https://i.picsum.photos/id/1005/5760/3840.jpg","https://picsum.photos/id/1015/6000/4000"];
    const handleClickSize = (e) => {
        e.preventDefault();
        setSelectedSize(e.currentTarget.id);
    }
    console.log(type);

    const handleClickAddToCart = e => {
        dispatch(addItemToCart(item));
    } 

    const handleClickBuyNow = e => {
        dispatch(addNewBuyNowItem(item,selectedSize));
        history.push("/checkout/true");
    }

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
    const displayOffers = () => {
        const {isOneDayDelivery,isZeroEmi,isFreeShipping,isTwoDaysDelivery,isSameDayDelivery} = offers; 
       return (
        <div className="available-offers">
        <span style={{display:"block"}}>Available offers:</span>
            {
                isFreeShipping ? <>
                <li>No cost shipping.</li>
                </>:<></>
            }     
            {
            isZeroEmi ? <>
            <li>Zero cost EMI on selected cards.</li>    
            </>:<></>
            }
            {
              isOneDayDelivery ? <>
            <li>Items can be delivered to your location in one day</li>           
              </>:<></>  
            }
            {
              isTwoDaysDelivery ? <>
            <li>Items can be delivered to youe location in two days</li>           
              </>:<></>  
            }
            {
              isSameDayDelivery ? <>
            <li>Items can be delivered to your location in the same day</li>           
              </>:<></>  
            }
        </div> 
       ); 
    } 
    const selectSize = () => {
        
        const sizeArr = sizes.map(size => {
            return(
                <span id={size} className={selectedSize === size ? "shadow-lg size" : "shadow-sm size"}  onClick={handleClickSize}>
                    <div>{size}</div>
                </span>    
            )
        })
        return(<div>
            <h5>Select size:</h5>
            <div className="sizes">
                {sizeArr}
            </div>
        </div>)        
    }
    if(Object.keys(item).length === 0)
        {
            return(<></>);
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
                                     <AddToCartButton onClick = {handleClickAddToCart} style={{display:"block"}}>Add To Cart</AddToCartButton>
                                     <AddToCartButton  style={{display:"block", marginLeft:"10px"}}>Add to Wishlist</AddToCartButton>
                                    </div>
                                    
                               </Col>
                            </Row>
                        </div> 
                        
                </Col>
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
                            {selectSize()}
                            <span style={{fontSize:"30px"}} className="price">Price:{price}$</span> 
                            {displayOffers()}  
                            <BuyNowButton onClick={handleClickBuyNow}>Buy Now</BuyNowButton>
                            <div className="shadow summary" style={{width:"100%", height:"250px",marginTop:"10px",padding:"0px 20px",fontSize:"1.5rem",marginTop:"20px"}}>
                                <h2>Specifications</h2>
                                <Row className="padding-0 max-width">
                                    <Col xs={6}>
                                    Colors Available:
                                    </Col>
                                    Red,Orange,Yellow
                                    <Col xs={6}>
                                    </Col>
                                </Row>
                                <Row className="padding-0 max-width">
                                    <Col xs={6}>
                                    Pattern:
                                    </Col>
                                    Solid
                                    <Col xs={6}>
                                    </Col>
                                </Row>
                                <Row className="padding-0 max-width">
                                    <Col xs={6}>
                                    Technology:
                                    </Col>
                                    Lightweight
                                    <Col xs={6}>
                                    </Col>
                                </Row>
                                <Row className="padding-0 max-width">
                                    <Col xs={6}>
                                    Available Sizes:
                                    </Col>
                                    {type === "Sneakers" ? <span style={{marginRight:"6px"}}>UK:</span> : ""}
                                    {(() => { 
                                       const sizeElements = sizes.map((size , index) => {
                                         if(index === 0)
                                            {
                                            return(<span>{size}</span>);
                                            }  
                                        return(<span>,{size}</span>);
                                       });
                                       return sizeElements;
                                    })()}
                                    <Col xs={6}>
                                    </Col>
                                </Row>
                                
                                <span></span>
                                 
                            </div>  
                     </div>   
                </Col>
             </Row>
             <hr/>
             <ReviewsAndRatings reviews={reviews} averageRating={averageRating}/>
        </Container>
    );
}

export default Product; 