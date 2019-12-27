import React from "react"; 
import styled from "styled-components";
import {Carousel} from "react-bootstrap"; 

const Container = styled.div``;

const PHDiv = styled.div`
width:100%;
height:90vh;
background-image: url(${props => props.url});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
background-color: ${props => props.color};
`;

const SliderItem = (props) => {
const {mainText, secondaryText, imageName} = props;
console.log("Hello");
return(

  

);
}



export default SliderItem; 
