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
import {faMale,faFemale,faHatCowboy, faShoppingBag, faThumbsUp, faBalanceScale} from "@fortawesome/free-solid-svg-icons";
import {Row,Col,Container} from "react-bootstrap";

import styled from "styled-components";
import MainBox from "../../components/MainBox";

const OverviewSection = styled.div`
 
  padding:0;
`;

const InformationSection = styled.div`
height:500px;
margin-bottom:25px;
background:url(https://images.unsplash.com/photo-1516767254874-281bffac9e9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);

`;

const InformationBox = styled.div`
height:90%;
width:350px;
background:${props => props.theme.transparentBackgroundColor};
.infomation-box-header{
  width:100%;
  height:10%;
  background:${props => props.theme.backgroundColorLite};
}
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
    
            <OverviewSection as={Row} className="justify-content-center align-items-center ml-0 mr-0  mb-5 mt-5 mt-sm-0 pt-5 pt-sm-0 ">
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
            </OverviewSection>

            <FeaturedOverview />

            <InformationSection className="d-flex justify-content-center align-items-flex-start pt-3 pb-3">
                <InformationBox className="mr-0 ml-0 mr-sm-3 ml-sm-3">
                    <div className="infomation-box-header">
                       <FontAwesomeIcon icon={faThumbsUp}/>
                       <span>Bestsellers</span>
                    </div> 
                    
                    <div className="content">
                    </div> 
                </InformationBox> 
                <InformationBox className="mr-0 ml-0 mr-sm-3 ml-sm-3">
                      <div className="infomation-box-header">
                          <FontAwesomeIcon icon={faShoppingBag}/>
                          <span>Our Store</span>
                      </div> 

                      <div className="content">
                      </div> 
                </InformationBox> 
                <InformationBox className="mr-0 ml-0 mr-sm-3 ml-sm-3">
                    <div className="infomation-box-header">
                       <FontAwesomeIcon icon={faBalanceScale}/>
                       <span>Sales!</span>
                    </div> 
                    
                    <div className="content">
                    </div>  
                  </InformationBox> 
            </InformationSection>

    
        
       
       
      </div>
      
   
    );
}

export default Homepage; 



