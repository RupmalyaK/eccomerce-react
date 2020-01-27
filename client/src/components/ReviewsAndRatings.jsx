import React from "react";
import styled from "styled-components";
import RatingStar from "./RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings"; 

const Container = styled.div`

width:1080px;
background:red;
margin:0 auto;
margin-top:250px;

.averageRating{
    background:yellow;
    display:inline-flex;
    padding:5px;
    flex-direction:columns;
  
}

.average-rating-points{
    background:grey;
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
    //const {averageRating, reviews} = props; 
    
    const reviews = [
        {
            "text": "My reviews are awesome!",
            "_id": "5e2b23e68de568424009340f",
            "user": "dlwjco20RwgkxM8qskaGC89tVYm2aaa",
            "rating": 5
        },
        {
            "text": "My reviews are awesome!",
            "_id": "5e2b23f78de5684240093410",
            "user": "dlwjco20RwgkxM8qskaGC89tVYm2rup",
            "rating": 5
        },
        {
            "text": "My reviews are awesome!",
            "_id": "5e2b240e8de5684240093411",
            "user": "dlwjco20RwgkxM8qskaGC89tVYm2riya",
            "rating": 4
        },
        {
            "text": "My reviews are awesome!",
            "_id": "5e2b247a0bbb2b0ca8231047",
            "user": "dlwjco20RwgkxM8qskaGC89tVYm2zoroaristrian",
            "rating": 4
        },
        {
            "text": "My reviews are awesome!",
            "_id": "5e2b24970bbb2b0ca8231048",
            "user": "dlwjco20RwgkxM8qskaGC89tVYm2hindu",
            "rating": 1
        }
    ];
    const displayAllReviews = () => {
            const ReviewsComponents = reviews.map( review => {
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
                          <section style={{background:"coral",width:"70%",float:"right",height:"100%"}}>
                                {text}
                          </section>     
                    </div>
                );
            });

            return ReviewsComponents;
    }

    return (
        <Container>
            <div className="averageRating"> 
            <h2 className="average-rating-points">{2.5}</h2>
                 <StarIcon icon={faStar}/>
            </div>
             {displayAllReviews()}
        </Container>
    ); 
}

export default ReviewsAndRatings;

/**<RatingStar
            starSize={"50px"}
            spacing={"5px"}
            /> */