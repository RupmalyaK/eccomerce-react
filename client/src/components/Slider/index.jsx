import React, {useState,useEffect} from "react"; 
import {Carousel, Jumbotron} from "react-bootstrap"; 
import {PHDiv, ShopNowButton} from "./style.jsx"; 
import CustomButton from "../CustomButton";
import styled from "styled-components";
import {motion,useAnimation} from "framer-motion";
import {useHistory} from "react-router-dom";

const Caption = styled.div`
position:absolute;
background:"inherit";
display:flex;
flex-direction:column;
width:600px;
z-index:5;
top:40%;
left:20% !important;
justify-content:flex-start;
padding:0 !important;
margin:0 !important;

.heading{
  display:none;
}
.main-text{
  color:${props => props.theme.litePrimaryTextColor};
  align-self:flex-start;
  font-size:calc(30px + 3vw);
  font-weight:700;
  text-transform: uppercase;
  opacity:0.7;
}

.sub-text{
  align-self:flex-start;
  font-size:calc(22px + 2vw);
  font-weight:500;
  text-transform: uppercase;
  opacity:0.8;
  color:white;
}

.buttons{
  margin-top:25px;
  display:flex;
  width:40%;
  justify-content:space-around;



`;



const CaptionButton = styled(CustomButton)`
background:${props => props.theme.transparentBackgroundColor};
font-size:.7rem;
width:90px !important;
height:40px;
margin:0;
padding:0;
font-weight:10 !important;
`;

const Slider = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCarouselButtons , setShowCarouselButtons] = useState(false); 
    const [direction, setDirection] = useState(null);
    const leftCaptionButtonControl = useAnimation();
    const rightCaptionButtonControl = useAnimation();
    const mainTextControl = useAnimation();
    const subTextControl = useAnimation();
    const {slideArr} = props; 

    const animateSequence = async () => {
    
      mainTextControl.start({rotate:10,opacity:0});
      subTextControl.start({rotate:10,opacity:0});
      leftCaptionButtonControl.start({y:100,height:100,opacity:0});
      await rightCaptionButtonControl.start({y:100,height:100,opacity:0});
     
      await mainTextControl.start({rotate:0 , opacity:1, transition:{duration:0.2,ease: "easeInOut"} });
      await subTextControl.start({rotate:0 , opacity:1,transition:{duration:0.2,ease: "easeInOut"} });
      await leftCaptionButtonControl.start({ y:0,opacity:1,height:40, transition:{duration:0.2} });
      return await rightCaptionButtonControl.start({y:0,opacity:1,height:40, transition:{duration:0.3} });
    }
    
    useEffect(
      () => {
 
       animateSequence();
      }
      ,[currentIndex]);

  
    const handleSelect = (selectedIndex, e) => {
      setCurrentIndex(selectedIndex);
      setDirection(e.direction);
    };
    
 
    const handlerMouseEnterCarousel = (e) => {
        setShowCarouselButtons(true);
    }

    const handleMouseLeaveCarousel = e => {
        setShowCarouselButtons(false);
    }

    
    const displayCarousels = () => {
        const itemArr = slideArr.map((slide, index) => {
          return (
            <Carousel.Item key={index}>
              <PHDiv color="white" url={process.env.PUBLIC_URL + "/images/" + slide.imageName}>
              </PHDiv>
                <Caption className="mt-5 pt-5 mt-sm-0 pt-sm-0">
                    <motion.span className="heading" >Hi I am Lola...</motion.span>
                    <motion.span className="main-text" initial={{rotate:45,opacity:0}} animate={mainTextControl}>{slide.mainText}</motion.span>
                    <motion.span className="sub-text" initial={{rotate:45,opacity:0}} animate={subTextControl}>{slide.secondaryText}</motion.span>
                    <div className="buttons">
                                <CaptionButton initial={{y:100,height:100,opacity:0}} animate={leftCaptionButtonControl}>Shop all</CaptionButton>
                                <CaptionButton initial={{y:100,height:100,opacity:0}}  animate={rightCaptionButtonControl}>Read more</CaptionButton>      
                    </div>
                </Caption> 
            </Carousel.Item>
            );
          });
        return itemArr;
    }   
   
    const showCarousel = () => {
      if(showCarouselButtons)
        {
          return (
        <Carousel fade activeIndex={currentIndex} direction={direction} onMouseEnter={handlerMouseEnterCarousel} onMouseLeave={handleMouseLeaveCarousel} onSelect={handleSelect}  indicators={false} >
            {displayCarousels()}
        </Carousel>
          );
        }
        else {
         return (<Carousel fade activeIndex={currentIndex} onMouseEnter={handlerMouseEnterCarousel} onMouseLeave={handleMouseLeaveCarousel} direction={direction} onSelect={handleSelect} prevIcon={null} nextIcon={null} indicators={false} >
            {displayCarousels()}
        </Carousel>);
        }
    }

    return(
        <>
          {showCarousel()}  
        </>
         );
}



export default Slider; 


/** 
 *        <Carousel.Caption as={Jumbotron} style={{background:"#282828aa", zIndex:5}}>
                <h1>{slide.mainText}</h1>
                <p>{slide.secondaryText}</p>
                <ShopNowButton>Shop Now</ShopNowButton>
                </Carousel.Caption>
 * */ 