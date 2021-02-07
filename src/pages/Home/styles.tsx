import styled from 'styled-components';

export const HomeSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const HomeCoreDisclaimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 2rem;

  background-color: #ffff;
  color: ${(p) => p.theme.colors.textOnPrimary};

  width: 400px;
  max-width: 90vw;
  height: 400px;
  max-height: 100vh;

  margin: 20px;

  border-radius: 13px;

  box-shadow: ${(p) => p.theme.boxShadow};
`;

export const HomeCoreDisclaimerTitle = styled.h1`
  display: flex;
  align-items: center;
`;
