import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  a {
    text-decoration:none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  @media only screen and (min-width: 400px) {
    body {
      font-size: 10px !important;
    }
  }

`;

export default GlobalStyle;
