import React from "react";
import styled from "styled-components";

const Container = styled.div`
height:450px;
width:29%;
position:relative; 
font-size:1.4rem;
display:block;
border:0.1px solid black;
.heading{
    text-align:center;
    margin-top:30px;
    }
.form{
    position:relative;
    padding:10px 20px;
    height:100%;
    width:100%;    
} 

.search-button{
    padding:10px 60px;
    bottom:50px;
    position:relative;
    margin:0 auto;
    border-radius:0px;
    font-size:1rem;
    display:block;
    top:10px;
}

.row {
    margin:0;
}
`;

export default Container; 