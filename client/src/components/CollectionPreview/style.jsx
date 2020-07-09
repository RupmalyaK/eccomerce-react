import React from "react"; 
import styled from "styled-components";

export const Container = styled.div`  
width:50vw;
height:600px;
margin-bottom:100px;
position:relative;
display:flex;
flex-direction:column;
margin-bottom:10px;
padding-top:10px;
max-width:1200px !important;
//box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
&:hover{
  //  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}    
}
.slider-wrapper{
  overflow:auto;
  border-top:1px solid ${props => props.theme.primaryBorderColor};
  padding-top:75px;

}
.arrow{
 
   font-size:22px !important;
   height:20px;
   width:20px;
   position:absolute;
   top:10px;
   right:30px;
   color:${props => props.theme.primaryBorderColor};

  cursor:pointer;
  
  .arrowLeft{
      position:relative;
      right:50px;
      border:1px solid grey;
      display:flex;
      justify-content:center;
      align-items:center;
      height:22px;
      padding:15px;
      font-weight:100 !important;

      .fa-angle-left{
        font-weight:100 !important;
      }
    
  }

  .arrowRight{

   border:1px solid grey;
   height:22px;
   padding:15px;
   display:flex;
   justify-content:center;
   align-items:center;

   
  }

  
 
}
`;

export const Title = styled.h1`
font-size: 28px;
margin-bottom: 25px;
text-align:center;
align-self:flex-start;
margin-left:25px;

.link{
  color:${props => props.theme.primaryTextColor};

  &:hover{
    text-decoration:none;
    color:${props => props.theme.litePrimaryTextColor};
  }
}
`;
