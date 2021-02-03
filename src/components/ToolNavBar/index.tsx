import React from 'react';
import NavBar from './styles';

interface IToolNavBar {
  breadCrumbs?: React.ReactChild;
}

const ToolNavBar: React.FC<IToolNavBar> = ({ children }) => {
  return (
    <NavBar>
      <NavBar.BreadCrumbs>{children}</NavBar.BreadCrumbs>
    </NavBar>
  );
};

export default ToolNavBar;
