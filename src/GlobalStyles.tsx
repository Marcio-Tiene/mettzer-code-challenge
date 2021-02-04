import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-appearance:none;
    margin: 0;
    padding: 0;
  }
  body {
   
    display: flex;
    flex-direction: column;
    font-family: 'Open Sans', sans-serif;
    min-height: 100vh;
    min-width:100vw;
    
  }

  a{ 
    text-decoration:none;
    
  }
  
  #modal-root {
    z-index:1000;
    position:absolute;
  }
   

  
  
  #root {
    flex:1;
    
    display:flex;
    flex-direction:column;   
    
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg.main};
  }
  `;

export default GlobalStyles;
