import React from "react"; 
import styled from "styled-components"; 

const Container = styled.div``;

const Layout = (props) => {
    return(
    <Container>
        {props.children}
    </Container>);
}


export default Layout; 