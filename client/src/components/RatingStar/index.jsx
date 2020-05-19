import React from "react";
import styled from "styled-components";
import StarRatings from "react-star-ratings"; 




const Container = styled.div`
margin:0 auto;
width:auto;
background:yellow;
`;


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

