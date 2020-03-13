import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import styled from "styled-components";
import RatingStar from "./RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings"; 
import {getFirebaseUserById} from "../firebase/firebase.util.js";
import {selectCurrentUser} from "../redux/user/user.selector.js";
import {selectCurrentItem} from "../redux/browse/browse.selector.js";


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



const ReviewsAndRatings = props => {
        const {averageRating, reviews, ...otherProps} = props; 
        const [currentRating, setCurrentRating] = useState(0);
        const [text, setText] = useState(""); 
        const currentUser = useSelector(selectCurrentUser); 
        console.log("DEBUGOOO: ", currentUser);
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

        const displayWriteReviewForm = () => {
            if(!currentUser)
                {
                   return;
                }
                return(
                    <div>
                        <p>Write your review here</p>
                        <StarRatings 
                                rating={currentRating}
                                changeRating={(newRating) => {
                                    setCurrentRating(newRating)    
                                }}
                                starDimension={"30px"}
                                starSpacing={"10px"}
                            />

                    </div>
                );
        }
    return (
        <Container>
            <div className="averageRating"> 
            <h2 className="average-rating-points">{averageRating}/5</h2>
                 <StarIcon icon={faStar}/>
                 <em>out of {reviews ? reviews.length : <></>} reviews</em>
            </div>
               {displayWriteReviewForm()}
             {reviews && reviews.length != 0 ? displayAllReviews():
             <h4 style={{marginTop:"-20px"}}>No reviews</h4>
             }
             {!currentUser ? (<h3 style={{marginTop:"20px", marginLeft:"20px"}}>Sign in to write review about this product!</h3>) : <></>}
            
        </Container>
    ); 
}

export default ReviewsAndRatings;

