import React from "react"; 
import {useSelector} from "react-redux";
import {selectIsPageYtop} from "../../redux/system/system.selector.js";
import UpperNavbar from "../UpperNavbar";
import LowerNavbar from "../LowerNavbar";
import {Container,UpperNavbarAnm,UpperNavbarWrapper,LowerNavbarWrapper} from "./style.jsx";

const Header= (props) => {
    const isPageYTop = useSelector(selectIsPageYtop);
return(
<Container>
    <UpperNavbarWrapper isPageYTop={isPageYTop} variants={UpperNavbarAnm}  animate={isPageYTop ? "expand" : "compact"} transition={{duration:"0.5"}} >
         <UpperNavbar/>
    </UpperNavbarWrapper>

    <LowerNavbarWrapper>
        <LowerNavbar />
    </LowerNavbarWrapper>
    
</Container>
);
}

export default Header; 