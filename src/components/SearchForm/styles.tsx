import { Form as UnForm } from '@unform/web';
import styled, { keyframes } from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const scale = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

const FormContainer = styled(UnForm)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.5rem;

  width: 500px;
  max-width: 90vw;
  height: fit-content;
  padding: 20px;

  background-color: ${({ theme }) => theme.colors.mainBg.main};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};

  border-radius: 13px;

  animation: ${scale} 0.2s linear;
`;

export const FormTitle = styled.h1`
  padding: 1rem;
  background-color: ${(p) => p.theme.colors.tertiary.main};
  color: ${(p) => p.theme.colors.textOnTertiary};
  font-size: 1.2rem;
  line-height: 1.4rem;
  margin-bottom: 20px;
  border-radius: 13px;
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${(p) => p.theme.boxShadow};
`;

export const CloseIcon = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  color: ${(p) => p.theme.colors.tertiary.main};
  cursor: pointer;

  :hover {
    color: ${(p) => p.theme.colors.tertiary.light};
  }
`;

export default FormContainer;
