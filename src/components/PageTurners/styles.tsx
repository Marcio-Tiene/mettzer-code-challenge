import styled from 'styled-components';

export const PageTurnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 5px;

  margin: 30px 0;
`;
export const PageButtonsContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;

  border-radius: 13px;

  & > *:first-child {
    border-radius: 13px 0 0 13px;
  }

  & > *:last-child {
    border-radius: 0 13px 13px 0;
  }
`;
export const EtceteraSpan = styled.span`
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  width: 30px;
  height: 30px;

  border-left: 1px solid ${(p) => p.theme.colors.tertiary.main};
  border-right: 1px solid ${(p) => p.theme.colors.tertiary.main};

  color: ${(p) => p.theme.colors.primary.main};
  background-color: ${(p) => p.theme.colors.tertiary.main};

  &.actual-page {
    align-items: center;
  }
`;

export const Pagebutton = styled.button`
  font-weight: 600;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: none;
  border-top: 2px solid ${(p) => p.theme.colors.tertiary.main};
  border-bottom: 2px solid ${(p) => p.theme.colors.tertiary.main};
  border-left: 1px solid ${(p) => p.theme.colors.tertiary.main};
  border-right: 1px solid ${(p) => p.theme.colors.tertiary.main};

  color: ${(p) => p.theme.colors.tertiary.main};
  background-color: ${(p) => p.theme.colors.primary.main};

  outline: none;
  cursor: pointer;
  transition: linear 0.3s;

  :hover {
    background-color: ${(p) => p.theme.colors.primary.dark};
  }
  :active {
    background-color: ${(p) => p.theme.colors.primary.main};
  }
`;
