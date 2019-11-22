import React from "react"; 
import styled from "styled-components"; 
import DirectoryItems from "../components/DirectionItems.jsx";

const HomepageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 20px;
`;
const Homepage = () => {

    return(        
        <HomepageContainer>    
            <DirectoryItems/>
        </HomepageContainer>       
    );
}

export default Homepage; 