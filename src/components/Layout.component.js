import React from "react"; 
import Styled from "styled-components"; 
import Header from "./Header.component.js";
import Footer from "./Footer.component.js"; 

const Layout = (props) => {

    return (
        <>
            <Header/>
            {props.children}
            <Footer />
         </>   
    );
  
}


export default Layout; 



