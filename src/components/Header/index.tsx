import React from 'react';
import HeaderContainer from './styles';
import Logo from '../../assets/img/logo_mettzer_light.svg';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderContainer.Logo src={Logo} />
    </HeaderContainer>
  );
};

export default Header;
