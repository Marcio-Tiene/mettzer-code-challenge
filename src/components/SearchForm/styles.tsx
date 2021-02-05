import { Form as UnForm } from '@unform/web';
import styled from 'styled-components';
import Button from '../Button';

const FormContainer = styled(UnForm)`
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

  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default FormContainer;
