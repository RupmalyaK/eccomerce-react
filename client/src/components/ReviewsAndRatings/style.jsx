import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
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

export const StarIcon = styled(FontAwesomeIcon)`
width:50px;
height:75px;
color:#171B24;
font-size:20px;
`;