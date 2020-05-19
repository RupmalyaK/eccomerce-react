import React, {useState} from "react"; 
import {Carousel, Jumbotron} from "react-bootstrap"; 
import {PHDiv, ShopNowButton} from "./style.jsx"; 

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