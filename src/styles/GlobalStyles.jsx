import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #FAF7F2;
    color: #292929;
    font-family: 'Roboto Condensed', sans-serif;
  }

  h1 {
    font-family: 'Barlow', sans-serif;
    font-size: 3rem;
    font-weight: 700;
    text-transform: uppercase;
  }

  p {
    font-family: 'Quattrocento', serif;
    font-size: 1.5rem;
    font-weight: 400;
  }

  a, button {
    font-family: 'Satisfy', cursive;
  }
`;

export default GlobalStyles;
