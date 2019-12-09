import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

body {
    font-family: 'Open Sans Condensed';
    padding: 20px 20px;

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
    box-sizing: border-box;
  }


  
`;

export default GlobalStyle;