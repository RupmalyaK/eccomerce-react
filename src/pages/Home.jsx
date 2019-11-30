import React from "react"; 
import styled from "styled-components"; 
import MenuItems from "../components/MenuItems.jsx";

const HomepageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;
const Homepage = () => {

    return(        
        <HomepageContainer>    
            <MenuItems/>
        </HomepageContainer>       
    );
}

export default Homepage; 