import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Open Sans Condensed';
    padding: 0px 0px;
    background-color:#f8f9fa;

    @media screen and (max-width:800px)
    {
        padding:0px;
        font-size:0.5rem;
    }
  }
  
  a {
    text-decoration: none;
    color: black;
  }
  
  * {
    background-color:#f8f9fa;
  }


  
`;

export default GlobalStyle;