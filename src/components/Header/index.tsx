import React from 'react';
import HeaderContainer, { BackToHomeLink } from './styles';
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
      />
      <BackToHomeLink onClickCapture={() => history.push('/')} />
    </HeaderContainer>
  );
};

export default Header;
