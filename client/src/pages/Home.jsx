import React, {useState, useEffect} from "react"; 
import styled from "styled-components"; 
import MenuItems from "../components/MenuItems.jsx";
import Slider from "../components/Slider.jsx";
import {useDispatch, useSelector} from "react-redux";
import {selectFeaturedItems} from "../redux/shop/shop.selector.js";
import {Carousel,Container} from "react-bootstrap"; 
import CollectionOverview from "../components/CollectionsOverview.jsx";
import {selectIsFetchingFeaturedItems} from "../redux/shop/shop.selector.js"
import LoadingSpinner from "../components/LoadingSpinner.jsx";
import {fetchFeaturedItemsAsync} from "../redux/shop/shop.actions.js";

//const CollectionOverviewWithSpinner = LoadingSpinner(CollectionOverview);
const HomepageContainer = styled.div`
overflow:hidden;
`;

const IntroductionSection = styled.div`
    height:95vh;
    width:100%;
    background-image:url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
`;



const Homepage = () => {

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);
    const featuredItems = useSelector(selectFeaturedItems);
    const dispatch = useDispatch();
    const isFetchingFeaturedItems = useSelector(selectIsFetchingFeaturedItems);
    useEffect(() => {
      dispatch(fetchFeaturedItemsAsync());
    }, [])
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
      setDirection(e.direction);
    };
  
  const slideArr = [
    {
      mainText:"50% off on Sneakers",
      secondaryText:"Starting from 20$",
      imageName:"featured-sneakers.jpeg",
    },
    {
      mainText:"Featured Jackets",
      secondaryText:"Jackets reccomended by us",
      imageName:"jackets-bellow-100.jpeg",
    },
    {
      mainText:"Cheapest hats",
      secondaryText:"Quality hats for cheap price",
      imageName:"hats-sale.jpeg",
    },
  ];  
  
    return (
      <HomepageContainer>
        <Slider slideArr = {slideArr}/>
        <MenuItems style={{marginTop:"50px"}}/>
        <CollectionOverview/>
      </HomepageContainer>
      
   
    );
}

export default Homepage; 

