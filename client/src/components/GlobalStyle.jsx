import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Open Sans Condensed';
    padding: 0px;
    margin:0px;
    background-color:#f8f9fa;

  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
  }


  
`;

/**
 * 
    @media screen and (max-width:800px)
    {
        padding:0px;
        font-size:0.5rem;
    }
 */

export default GlobalStyle;