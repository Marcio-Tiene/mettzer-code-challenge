import styled, { keyframes } from 'styled-components';
import { VscLoading } from 'react-icons/vsc';

interface IBaseButton {
  minWidth: string;
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const BaseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  min-width: ${(p: IBaseButton) => p.minWidth};
  width: fit-content;

  font-size: 1rem;

  padding: 0.5rem 1rem;
  border-radius: 3rem;
  background-color: ${(p) => p.theme.colors.primary.main};
  color: ${(p) => p.theme.colors.textOnPrimary};
  font-weight: 600;
  -webkit-box-shadow: ${(p) => p.theme.boxShadow};
  -moz-box-shadow: ${(p) => p.theme.boxShadow};
  box-shadow: ${(p) => p.theme.boxShadow};
  transition: linear 0.2s;

  :hover {
    background-color: ${(p) => p.theme.colors.primary.dark};
  }
  :active {
    background-color: ${(p) => p.theme.colors.primary.main};
  }
  :disabled {
    background-color: ${(p) => p.theme.colors.primary.dark};
  }

  &.search-button {
    margin-top: 20px;
    align-self: flex-end;
  }
`;

export const LoadingSpiner = styled(VscLoading)`
  color: ${(p) => p.theme.colors.tertiary.dark};
  width: 1rem;
  height: 1rem;

  animation: ${rotate} 1s linear infinite;
`;
