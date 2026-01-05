import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  body,html {
    margin: 0;
    font-family: "Inter",sans-serif;
    
  }

  input {
    font-family: inherit;
  }
`;
