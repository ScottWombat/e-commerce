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

  @media only screen and (max-width: 400px) {
    body {
      font-size: 28px !important;
    }
}

`;

export default GlobalStyle;
