import React from 'react';
import { FooterContainer, FooterLink, FooterText } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>
        Projeto desenvolvido para o teste técnico da{' '}
        <FooterLink
          to='https://www.mettzer.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          Mettzer
        </FooterLink>
        .
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
