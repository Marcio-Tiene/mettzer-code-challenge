import styled from 'styled-components';

export const CardArticle = styled.article`
  min-height: 2rem;
  height: fit-content;
  width: 90vw;

  padding: 1rem;

  border-radius: 13px;
  -moz-box-shadow: ${(p) => p.theme.boxShadow};
  -webkit-box-shadow: ${(p) => p.theme.boxShadow};
  box-shadow: ${(p) => p.theme.boxShadow};

  margin-top: 50px;

  background-color: ${(p) => p.theme.colors.mainBg.light};
`;
