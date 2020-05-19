import React from "react";
import StarRatings from "react-star-ratings"; 
import {Container} from "./style.jsx";

const RatingStar = props => {
    const {rating,starSize,spacing} = props; 
    return(
        <Container>
             <StarRatings 
             rating={rating}
             starDimension={starSize}
             starSpacing={spacing}
            /> 
        </Container>
    );
}


export default RatingStar;

