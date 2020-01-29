import React, {useState, useEffect} from "react";
import styled from "styled-components";
import RatingStar from "./RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings"; 
import {getFirebaseUserById} from "../firebase/firebase.util.js";

const Container = styled.div`

width:1080px;
margin:0 auto;
margin-top:250px;
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
    const {averageRating, reviews} = props; 
    const displayAllReviews =  () => {
            const ReviewsComponents = reviews.map( (review,index) => {
                const {text,_id,user,rating} = review;
                return (
                    <div key={_id} style={{border:"1px solid black",height:"250px",overflow:"hidden"}}>
                        <div className="stars" style={{padding:"10px"}}>
                        <StarRatings 
                            rating={rating}
                            starDimension={"30px"}
                            starSpacing={"10px"}
                          />
                        </div>
                          <span style={{padding:"5px"}}>{user.displayName}</span>
                          <section style={{background:"coral",width:"100%",height:"100%",marginBottom:"10px"}}>
                                {text}
                          </section>     
                    </div>
                );
            });

            return ReviewsComponents;
    };

    return (
        <Container>
            <div className="averageRating"> 
            <h2 className="average-rating-points">{averageRating}/5</h2>
                 <StarIcon icon={faStar}/>
            </div>
             {displayAllReviews()}
        </Container>
    ); 
}

export default ReviewsAndRatings;

