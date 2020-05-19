import React from "react"; 
import {default as CustomNavbar} from "../Navbar";
import {Container} from "./style.jsx";

const Header= (props) => {
return(
<Container>
    <CustomNavbar/>
</Container>
);
}

export default Header; 