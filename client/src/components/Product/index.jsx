import React, {useState} from "react"; 
import {useSelector,useDispatch} from "react-redux"; 
import {selectCurrentItem,selectIsPostingReview} from "../../redux/browse/browse.selector.js"; 
import {postReviewAsync} from "../../redux/browse/browse.actions.js";
import {Row} from "react-bootstrap";
import ReviewsAndRatings from "../ReviewsAndRatings";
import ProductLeftPanel from "../ProductLeftPanel";
import ProductRightPanel from "../ProductRightPanel";
import LoadingSpinner from "../LoadingSpinner";
import {Container} from "./style.jsx";


const ReviewsAndRatingsWithLoadingSpinner = LoadingSpinner(ReviewsAndRatings);

const Product = props => {
    const item = useSelector(selectCurrentItem); 
    const isPostingReview = useSelector(selectIsPostingReview);
    const [seller, setSeller] = useState("");
    const dispatch = useDispatch();
    const {_id,averageRating,reviews, type,sellerId} = item;  
   
    const sendReviewHandler = async (text,currentRating) => {
        dispatch(postReviewAsync(text,currentRating));
    }
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
             <ReviewsAndRatings isLoading={isPostingReview} onSubmit={sendReviewHandler} reviews={reviews} averageRating={averageRating}  postReviewAsync={postReviewAsync}/>
        </Container>
    );
}

export default Product; 