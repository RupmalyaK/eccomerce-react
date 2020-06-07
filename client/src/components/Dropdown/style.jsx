import React from "react";
import styled from "styled-components";
import {motion} from "framer-motion";

export const Container = styled(motion.div)`
background-color: ${props => props.theme.secondaryBackgroundColor};
position:absolute;
top:110%;
z-index: 5;
padding:0;
margin:0;
display:inline-block;

`;

export const containerAnm = {
    initial:{
       y:90,
       opacity:0,
    },
    final:{
        y:0,
        opacity:1.0,
    },
};


