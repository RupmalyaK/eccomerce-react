import React, {useState} from "react"; 
import styled from "styled-components";
import {Carousel, Jumbotron} from "react-bootstrap"; 
import CustomButton from "../CustomButton";

const Container = styled.div`
height:90vh;
width:100%;
`;

const PHDiv = styled.div`
width:100%;
height:100vh;
background-image: url(${props => props.url});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
background-color: ${props => props.color};

`;

const ShopNowButton = styled(CustomButton)`
margin:0 auto;
padding:0 !important;


`;

const Slider = (props) => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
  
    const {slideArr} = props;  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
    const displayCarousels = () => {
        const itemArr = slideArr.map((slide, index) => {
          return (
            <Carousel.Item key={index}>
              <PHDiv color="white" url={process.env.PUBLIC_URL + "/images/" + slide.imageName}>
              </PHDiv>
                
                <Carousel.Caption as={Jumbotron} style={{background:"#282828aa"}}>
                <h1>{slide.mainText}</h1>
                <p>{slide.secondaryText}</p>
                <ShopNowButton>Shop Now</ShopNowButton>
                </Carousel.Caption>
            </Carousel.Item>
            );
          });
        return itemArr;
    }   
   
    return(
   
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>
            {displayCarousels()}
        </Carousel>
         );
}



export default Slider; 