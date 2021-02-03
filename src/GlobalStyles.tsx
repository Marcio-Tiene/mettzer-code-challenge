import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-appearance:none;
  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
    min-width:100vw;
    
  }
  

  #root {
    flex:1;
    
    display:flex;
    flex-direction:column;
    
    background-color: ${({ theme }) => theme.colors.mainBg.main};
    color: ${({ theme }) => theme.colors.contrastText};
  }
  `;

export default GlobalStyles;
