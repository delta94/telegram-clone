import { createGlobalStyle } from 'styled-components';



export default createGlobalStyle`
  @import url(https://allfont.net/allfont.css?fonts=lucida-sans-unicode);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Lucida Sans Unicode', arial;
    //font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
