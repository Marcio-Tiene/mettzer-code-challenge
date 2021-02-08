import React from 'react';
import HeaderContainer, { BackToHomeLink, BackToHomeLinkIcon } from './styles';
import Logo from '../../assets/img/logo_mettzer_light.svg';
import { useHistory } from 'react-router';

const Header: React.FC = () => {
  const history = useHistory();
  return (
    <HeaderContainer>
      <HeaderContainer.Logo
        src={Logo}
        alt='Mettzer Logotipo'
        width='150'
        height='30'
        onClickCapture={() => history.push('/')}
      />
      <BackToHomeLink onClickCapture={() => history.push('/')}>
        Voltar para a Home <BackToHomeLinkIcon />
      </BackToHomeLink>
    </HeaderContainer>
  );
};

export default Header;
