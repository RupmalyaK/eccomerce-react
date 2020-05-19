import React, {useState} from "react"; 
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectCurrentItem} from "../../redux/browse/browse.selector.js"; 
import {useSelector} from "react-redux"; 
import {Row} from "react-bootstrap";
import CustomButton from "../CustomButton";
import ReviewsAndRatings from "../ReviewsAndRatings";
import ProductLeftPanel from "../ProductLeftPanel";
import ProductRightPanel from "../ProductRightPanel";


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
    const {_id,averageRating,reviews, type} = item;  
    const [selectedSize, setSelectedSize] = useState(item.sizes ? item.sizes[0] : null);
    const history = useHistory();
    const dispatch = useDispatch(); 

    if(Object.keys(item).length === 0)
        {
            return(<></>);
        }
    return(
        <Container> 
            <Row>
               <ProductLeftPanel/>
                <ProductRightPanel/>
             </Row>
             <hr/>
             <ReviewsAndRatings reviews={reviews} averageRating={averageRating} itemType={type} itemObjectId={_id}/>
        </Container>
    );
}

export default Product; 