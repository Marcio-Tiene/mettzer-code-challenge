import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -webkit-appearance:none;
    margin: 0;
    padding: 0;

    scrollbar-width: thin;

  scrollbar-color: ${(p) => p.theme.colors.primary.main} transparent;
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.colors.primary.main};
    border-radius: 5px;
  }



    @media (max-width:900px) {
    scrollbar-width: none;
    ::-webkit-scrollbar {
    width: 0px;
  }

  }
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
  
  
   

  
  
  #root {
    position: relative;
    flex:1;
    
    display:flex;
    flex-direction:column;   
    
    color: ${({ theme }) => theme.colors.contrastText};
    background-color: ${({ theme }) => theme.colors.mainBg.main};
  }
  `;

export default GlobalStyles;
