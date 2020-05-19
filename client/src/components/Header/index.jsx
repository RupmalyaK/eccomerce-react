import React from "react"; 
import styled from "styled-components"; 
import {default as CustomNavbar} from "../Navbar";


const Container = styled.div`
display:flex;
flex-direction:column;
position:fixed;
background:red;
top:0;
padding-bottom:5px;
z-index:999;
background:#f8f9fa;
width:100%;
`;

const Header= (props) => {

return(
<Container>
    <CustomNavbar/>
</Container>
);
}



export default Header; 