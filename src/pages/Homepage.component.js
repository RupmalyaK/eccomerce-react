import React from "react"; 
import styled from "styled-components"; 
import Layout from "../components/Layout.component.js";
import DirectoryItems from "../components/DirectoryItems.component.js";

const HomepageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 20px 80px;
`;
const Homepage = () => {

    return(        
        <HomepageContainer>    
            <DirectoryItems/>
        </HomepageContainer>       
    );
}

export default Homepage; 