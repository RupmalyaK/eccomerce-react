import {createGlobalStyle} from "styled-components";

export const theme = {
  primaryButtonColor:"#eb2c33", 
  secondaryButtonColor:"#82b440",
  alternateButtonColor:"white",

  primaryBackgroundColor:"#eaeaea",
  secondaryBackgroundColor:"rgba(0, 0, 0, 0.95)",
  secondaryBackgroundColorLite:"#0e0e0e",
  transparentBackgroundColor:"rgba(14, 14, 14, 0.5)",
  

  primaryBorder:"rgba(234, 234, 234, 0.5)",

  
  primaryTextColor:"#eb2c33",
  litePrimaryTextColor:"#ED4047",
  secondaryTextColor:"#eaeaea",
  alternateTextColor:"white",
  boxTextColor:"rgba(234, 234, 234, 0.7)",
  
}


export const GlobalStyle = createGlobalStyle`
body {
    font-family: Arial, Helvetica, sans-serif !important;

    background:${props => props.theme.secondaryBackgroundColor} !important;

  }
  * {
  }  
`;




