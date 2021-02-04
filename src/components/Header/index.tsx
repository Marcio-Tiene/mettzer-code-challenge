import React from 'react';
import HeaderContainer from './styles';
import Logo from '../../assets/img/logo_mettzer_light.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContainer.Logo
        src={Logo}
        alt='Mettzer Logotipo'
        width='150'
        height='30'
      />
    </HeaderContainer>
  );
};

export default Header;
