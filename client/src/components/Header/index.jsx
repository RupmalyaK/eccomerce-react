import React from "react"; 
import {useSelector} from "react-redux";
import {selectIsPageYtop} from "../../redux/system/system.selector.js";
import UpperNavbar from "../UpperNavbar";
import LowerNavbar from "../LowerNavbar";
import {Container} from "./style.jsx";

const Header= (props) => {
    const isPageYTop = useSelector(selectIsPageYtop);
return(
<Container isPageYTop={isPageYTop}>
    <UpperNavbar/>
    <LowerNavbar />
</Container>
);
}

export default Header; 