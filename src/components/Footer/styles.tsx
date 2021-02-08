import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterContainer = styled.footer`
  width: 100vw;
  height: fit-content;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 1rem;

  color: #ffffff;
  background-color: ${({ theme }) => theme.colors.tertiary.main};
`;

export const FooterText = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary.main};
`;
