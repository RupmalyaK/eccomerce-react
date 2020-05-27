import React from "react"; 
import {useSelector} from "react-redux";
import {selectIsPageYtop} from "../../redux/system/system.selector.js";
import {default as CustomNavbar} from "../Navbar";
import {Container} from "./style.jsx";

const Header= (props) => {
    const isPageYTop = useSelector(selectIsPageYtop);
return(
<Container isPageYTop={isPageYTop}>
    <CustomNavbar/>
</Container>
);
}

export default Header; 