import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
display:flex;
flex-direction:column;
position:fixed;
top:0;
z-index:50;
background:${props => props.theme.transparentBackgroundColor};
padding-bottom:0px;
width:100%;
`;

export const UpperNavbarWrapper = styled(motion.div)`
background:${props => props.isPageYTop ? "" : props.theme.secondaryBackgroundColor};
`;

export const LowerNavbarWrapper = styled.div`
`;

export const UpperNavbarAnm = {
    expand:{
        paddingTop:"40px",
        paddingBottom:"30px",
    },
    compact:{
        paddingTop:"0px",
        paddingBottom:"0px",  
    }

};


