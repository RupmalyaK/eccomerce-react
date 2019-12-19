import React from "react"; 
import styled from "styled-components"; 
import MenuItems from "../components/MenuItems.jsx";
import Slider from "../components/Slider.jsx";


const HomepageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const IntroductionSection = styled.div`
    height:90vh;
    width:100%;
    background-image:url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
`;

const Homepage = () => {

    return(        
        <HomepageContainer>    
            <Slider />
        </HomepageContainer>       
    );
}

export default Homepage; 

/*
 <HomepageContainer>    
            <MenuItems/> 
        </HomepageContainer>  
        */