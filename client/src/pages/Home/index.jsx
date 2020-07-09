import React, {useState, useEffect} from "react"; 
import {useDispatch, useSelector} from "react-redux";
import {selectFeaturedItems} from "../../redux/shop/shop.selector.js";
import FeaturedOverview from "../../components/FeaturedOverview";
import {selectIsFetchingFeaturedItems} from "../../redux/shop/shop.selector.js"
import {fetchFeaturedItemsAsync} from "../../redux/shop/shop.actions.js";
import MenuItems from "../../components/MenuItems";
import HomeMainBox from "../../components/MainBox";
import MainBoxContent from "../../components/MainBoxContent";
import Slider from "../../components/Slider";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMale,faFemale,faHatCowboy,faCartPlus,faCaretDown,faCheck} from "@fortawesome/free-solid-svg-icons";
import {Row,Col} from "react-bootstrap";

import styled from "styled-components";
import MainBox from "../../components/MainBox";

const InformationSection = styled.div`
 
  padding:0;
`;




const Homepage = () => {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const featuredItems = useSelector(selectFeaturedItems);
    const dispatch = useDispatch();
    const isFetchingFeaturedItems = useSelector(selectIsFetchingFeaturedItems);
    
    useEffect(() => {
      dispatch(fetchFeaturedItemsAsync());
    }, []);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
  const slideArr = [
    {
      mainText:"NEW STYLE",
      secondaryText:"SALE 70% off",
      imageName:"slider1.jpg",
    },
    {
      mainText:"NEW STYLE",
      secondaryText:"SALE 30% off",
      imageName:"slider2.jpg",
    },
    {
      mainText:"NEW STYLE",
      secondaryText:"SALE 10% off",
      imageName:"slider3.jpg",
    },
  ];  
  
    return (
      <div style={{overflow:"hidden"}}>
        <Slider slideArr = {slideArr}/>
    
            <InformationSection as={Row} className="justify-content-center align-items-center ml-0 mr-0  mb-5 mt-5 mt-sm-0 pt-5 pt-sm-0 ">
                <Col as={HomeMainBox} heading="Man" icon={faMale}>
                    <MainBoxContent img={"home-box-img-man.jpg"} names={["Jeans&Trousers","Jackets&Coats","Tshirt","Boots"] }/>
                </Col>      
                <Col as={HomeMainBox} heading="Woman" icon={faFemale} >
                    <MainBoxContent img={"home-box-img-woman.jpg"} names={["Tops&Skirts","Dresses&Suits","Blouses&Sweaters","Sneakers"] }/>
                </Col>  
                <Col as={HomeMainBox}  heading="Stylish" icon={faHatCowboy} >
                    <MainBoxContent img={"home-box-img-hat.jpeg"} names={["Tops","Skirts","Boots","Sneakers"]} style={{backgroundRepeat:"repeat-x",backgroundPosition:"right",backgroundSize:"300px 380px"}}/>
                </Col>  
                <Col as={MenuItems} style={{marginTop:"0px"}}/>
            </InformationSection>


            <FeaturedOverview />
    
        
       
       
      </div>
      
   
    );
}

export default Homepage; 



