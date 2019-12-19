import React from "react"; 
import styled from "styled-components"; 
import {default as CustomNavbar} from "./Navbar.jsx";

const Container = styled.div`
padding-bottom:55px;
`;

const Header= (props) => {

return(
<Container>
    <CustomNavbar/>
</Container>
);
}



export default Header; 