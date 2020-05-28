import React from "react"; 
import {useSelector} from "react-redux"; 
import {selectCurrentItem} from "../../redux/browse/browse.selector.js"; 
import {postReviewAsync} from "../../redux/browse/browse.actions.js";
import {Row} from "react-bootstrap";
import ReviewsAndRatings from "../ReviewsAndRatings";
import ProductLeftPanel from "../ProductLeftPanel";
import ProductRightPanel from "../ProductRightPanel";
import {Container} from "./style.jsx";


const Product = props => {
    const item = useSelector(selectCurrentItem); 
    const {_id,averageRating,reviews, type} = item;  


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
             <ReviewsAndRatings reviews={reviews} averageRating={averageRating}  postReviewAsync={postReviewAsync}/>
        </Container>
    );
}

export default Product; 