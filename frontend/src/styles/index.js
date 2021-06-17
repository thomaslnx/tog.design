import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
  --body-background-color: #F5F6F9;
  --write-now-button-background: #20C5D2;
  --cards-background: #ffffff;
  --cards-title-color: #000000;
  --gray-cart-color: #A9A7B1;
  --items-background: #FEC92E;
  --main-logo-color: #191919;
  --signin-button-background: #6356A5;

  --fonts: Helvetica;
  --signin-button-weight: bold;
  --signin-button-size: 12px;
  --signin-button-color: var(--cards-background);
  --signin-header-font: 'Bai Jamjuree', sans-serif;
  --placeholder-font: 'Roboto', sans-serif;
  --forgot-password-link: 'Montserrat', sans-serif;
}

*, html, body, #root {
  margin: 0;
  padding: 0
  outline: none !important;
}

body {
    background-color: #F5F6F9;
    font-smooth: antialiased;
    font-family: var(--fonts);
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
