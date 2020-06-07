import React from "react";
import {Container,containerAnm} from "./style.jsx";


const Dropdown = props => {
    const {children} = props;
    return (
        <Container initial="initial" animate="final" transition={{duration:0.2}} variants={containerAnm}>
            {children}
        </Container>
    );
}


export default Dropdown;