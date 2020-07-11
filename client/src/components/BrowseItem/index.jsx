import React from "react"; 
import {Col} from "react-bootstrap";
import {useDispatch} from "react-redux"; 
import {addItemToCart} from "../../redux/cart/cart.action.js"; 
import {setCurrentItemAsync} from "../../redux/currentItem/currentItem.actions";
import {useHistory} from "react-router-dom";
import {Container, AddToCartButton} from "./style.jsx"


const BrowseItem = props => {
    const {name,price, isFeatured, primaryImageUrl, type, _id} = props.item;  
    const dispatch = useDispatch();
    const history = useHistory(); 
    console.log("debug", type);
    const handleGoToItemPage = e => {
       dispatch(setCurrentItemAsync(props.item));
        history.push({
            pathname:`/browse/item/${type}/${_id}`,
    });
    }

    const handleAddToCart = e => {
        dispatch(addItemToCart(props.item));
    }

    const handleGoToCategoryPage = e => {
        history.push("/shop/" + type.toLowerCase());
    }

    const handleGoToSellerPage = e => {
        history.push("/seller/RupmalyaKumar"  )
    }
   
    return (
            <Col as={Container} key={_id} lg={12}>
               <img className="img-thumbnail" src={primaryImageUrl} alt={name}/>
                <div className="content"> 
                    <h5 className="name" style={{cursor:"pointer"}} onClick={handleGoToItemPage}>{name}</h5>
                         <p style={{display:"inline", cursor:"pointer"}} onClick={handleGoToSellerPage}>Sold by {"Rupmalya Kumar"}</p>
                         {isFeatured ? <i className= "featured">FEATURED</i> : <></>}
                        <i style={{display:"block", cursor:"pointer"}} onClick={handleGoToCategoryPage}>in {type}</i>
                         <div className="price"><h4>${price}</h4></div>
                      <AddToCartButton onClick= {handleAddToCart}>Add to Cart</AddToCartButton>  
                </div>
            </Col>
            );
}

export default BrowseItem; 
