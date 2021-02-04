import { Form as UnForm } from '@unform/web';
import styled from 'styled-components';

const FormContainer = styled(UnForm)`
  width: 500px;
  max-width: 90vw;
  height: fit-content;
  padding: 20px;

  /* background-color: ${({ theme }) => theme.colors.mainBg.light}; */
  background-color: ${({ theme }) => theme.colors.mainBg.main};
  -webkit-box-shadow: ${({ theme }) => theme.boxShadow};
  -moz-box-shadow: ${({ theme }) => theme.boxShadow};
  box-shadow: ${({ theme }) => theme.boxShadow};

  border-radius: ${({ theme }) => theme.borderRadius};
`;

export default FormContainer;
