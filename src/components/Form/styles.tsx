import { Form as UnForm } from '@unform/web';
import styled from 'styled-components';

const FormContainer = styled(UnForm)`
  width: 500px;
  max-width: 90vw;
  height: fit-content;

  /* background-color: ${({ theme }) => theme.colors.mainBg.light}; */
  background-color: #d0d4d4;
`;

export default FormContainer;
