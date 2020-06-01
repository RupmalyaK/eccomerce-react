import React, {useState} from "react";
import {useSelector} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user.selector.js";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings"; 

import {Form} from "react-bootstrap";
import CustomButton from "../CustomButton";
import {Container,StarIcon} from "./style.jsx";




const ReviewsAndRatings = props => {
        const {averageRating, reviews, onSubmit,...extraProps} = props; 
        const [currentRating, setCurrentRating] = useState(1);
        const [text, setText] = useState(""); 
        const currentUser = useSelector(selectCurrentUser); 
        const maxLengthOfTextArea = "120";
        const currentUserReviewIndex = reviews.findIndex(review => {
            if(currentUser && review.user.uid === currentUser.id)
                {
                    return true;
                }
             }
            );
           const currentUserReview = currentUserReviewIndex > -1 ? reviews[currentUserReviewIndex] : null; 
           
            if(currentUserReview)
                {
                     reviews.splice(currentUserReviewIndex,1);
                }
               
        const displayAllReviews =  () => {
                const ReviewsComponents = reviews.map( (review,index) => {
                    const {text,_id,user,rating} = review;
                    return (
                        <div key={_id} style={{height:"250px",overflow:"hidden"}}>
                            <hr />
                            <div className="stars" style={{padding:"10px"}}>
                            <StarRatings 
                                rating={rating}
                                starDimension={"30px"}
                                starSpacing={"10px"}
                            />
                            </div>
                            <div style={{marginLeft:"10px"}}>
                            <span style={{padding:"5px"}}>{user.displayName}</span>
                            <section style={{width:"100%",height:"100%",marginBottom:"10px"}}>
                                    {text}
                            </section> 
                            </div>
                                
                        </div>
                    );
                });
                return ReviewsComponents;
        };

        const handleWriteYourReviewChange = e => {
            setText(e.target.value);
        }

        const sendClickHandler = e => {
            e.preventDefault();
            onSubmit(text,currentRating);
        }

        
        const displayCurrentUserReview = () => {
            
            const {rating,user,text} = currentUserReview;
            return (<div style={{height:"250px",overflow:"hidden", border:"1px solid black", padding:"10px",marginBottom:"40px"}}>
                            <h4>Your review</h4>
                            <hr />
                            <div className="stars" style={{padding:"10px"}}>
                            <StarRatings 
                                rating={rating}
                                starDimension={"30px"}
                                starSpacing={"10px"}
                            />
                            </div>
                            <div style={{marginLeft:"10px"}}>
                            <span style={{padding:"5px"}}>{user.displayName}</span>
                            <section style={{width:"100%",height:"100%",marginBottom:"10px"}}>
                                    {text}
                            </section> 
                            </div>
                                
                        </div>);
        }
       const getNumberOfReviews = () => {
            return reviews.length + (currentUserReview ? 1 : 0);
        }
        const displayWriteReviewForm = () => {
            if(!currentUser)
                {
                   return;
                }
                return(
                    <div style={{border:"1px solid black", padding:"10px",marginBottom:"40px"}}>
                        <p>Write this review as <em>{currentUser.displayName}.</em></p>
                        <p>Your rating</p>
                        <StarRatings 
                                rating={currentRating}
                                changeRating={(newRating) => {
                                    setCurrentRating(newRating)    
                                }}
                                starDimension={"30px"}
                                starSpacing={"10px"}
                            />
                            <Form.Group controlId="writeReviewTextArea" style={{marginTop:"10px"}}>
                                <Form.Label>Write your own review here (Limit:{maxLengthOfTextArea - text.length} more characters)</Form.Label>
                                <Form.Control as="textarea" rows="3" maxLength={maxLengthOfTextArea} onChange={handleWriteYourReviewChange}/>
                            </Form.Group>
                            <CustomButton onClick={sendClickHandler}>Send</CustomButton>    
                    </div>
                );
        }
    return (
        <Container {...extraProps}>
       <div className="averageRating"> 
            <h2 className="average-rating-points">{averageRating}/5</h2>
                 <StarIcon icon={faStar}/>
                 <em>out of {reviews ? getNumberOfReviews() : <></>} reviews</em>
            </div>
    {currentUserReview ? displayCurrentUserReview() : displayWriteReviewForm()}
             {reviews && reviews.length != 0 ? displayAllReviews():
             <h4 style={{marginTop:"-20px"}}>No reviews</h4>
             }
             {!currentUser ? (<h3 style={{marginTop:"20px", marginLeft:"20px"}}>Sign in to write review about this product!</h3>) : <></>}
            
        </Container>
    ); 
}

export default ReviewsAndRatings;



