import {createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Open Sans Condensed';
    padding: 0px;
    margin:0px;
    background-color:#f8f9fa;

  }
  * {
  }  
`;

export const theme = {
  primaryButtonColor:"#eb2c33", 
  secondaryButtonColor:"#82b440",
  alternateButtonColor:"white",

  primaryBackgroundColor:"#eaeaea",
  secondaryBackgroundColor:"rgba(0, 0, 0, 0.95)",
  transparentBackgroundColor:"rgba(14, 14, 14, 0.5)",

  primaryTextColor:"#eb2c33",
  secondaryTextColor:"#eaeaea",
  alternateTextColor:"white",
  
}



