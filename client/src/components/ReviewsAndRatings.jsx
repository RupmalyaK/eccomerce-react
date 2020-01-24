import React from "react";
import styled from "styled-components";
import RatingStar from "./RatingStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`

width:140vw;
background:red;
height:90vh;
margin:0 auto;
margin-top:250px;

`;

const ReviewsAndRatings = props => {
    return (
        <Container>
             <FontAwesomeIcon icon={faStar} style={{width:"50px", height:"75px"}}/>
        </Container>
    ); 
}

export default ReviewsAndRatings;

/**<RatingStar
            starSize={"50px"}
            spacing={"5px"}
            /> */