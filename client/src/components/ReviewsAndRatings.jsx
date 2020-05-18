import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import RatingStar from "./RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings"; 
import {selectCurrentUser} from "../redux/user/user.selector.js";
import {Form} from "react-bootstrap";
import axios from "axios";
import {auth} from "../firebase/firebase.util";
import CustomButton from "./CustomButton.jsx";


const SendReviewButton = styled(CustomButton)`

`;


const Container = styled.div`

width:1080px;
margin:0 auto;
margin-top:35px;
margin-bottom:10px;
.averageRating{
    display:inline-flex;
    padding:5px;
    flex-direction:columns;
    margin-bottom:5px;
  
}

.average-rating-points{

    align-self:center;
}
`;

const StarIcon = styled(FontAwesomeIcon)`
width:50px;
height:75px;
color:#171B24;
font-size:20px;
`;


const useForceUpdate = () => useState()[1];

const ReviewsAndRatings = props => {
        const {averageRating, reviews, itemObjectId, itemType} = props; 
        const [currentRating, setCurrentRating] = useState(1);
        const [text, setText] = useState(""); 
        const [justReviewed, setJustReviewed] = useState(false);
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

        const handleSendReviewClick = async e => {
            e.preventDefault();
            const accessToken = await auth.currentUser.getIdToken();
            
            try{
                await axios(
                    {
                        method:"POST",
                        url:"/api/collections/collection/item/review",
                        data:{
                            itemType,
                            itemObjectId,
                            userObjectId:currentUser.id,
                            rating:currentRating,
                            text
                        },
                        headers: {
                            authorization:"Bearer " + accessToken,
                        }
                    }
                );
                window.location.reload(false);
            }
            catch(error)
                {

                }
          
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
                            <SendReviewButton onClick={handleSendReviewClick}>Send</SendReviewButton>    
                    </div>
                );
        }
    return (
        <Container>
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



