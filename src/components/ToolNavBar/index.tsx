import React from 'react';
import Button from '../Button';
import NavBar from './styles';
import { RiFileSearchLine } from 'react-icons/ri';
import FormOpenHook from '../../hooks/FormOpenHook';

interface IToolNavBar {
  breadCrumbs?: React.ReactChild;
}

const ToolNavBar: React.FC<IToolNavBar> = ({ children }) => {
  const { setIsFormOpen } = FormOpenHook();
  return (
    <NavBar>
      <NavBar.BreadCrumbs>{children}</NavBar.BreadCrumbs>
      <Button
        className='nav-button'
        label='Pesquisar'
        Icon={RiFileSearchLine}
        iconSize={2}
        onClick={() => setIsFormOpen(true)}
      />
    </NavBar>
  );
};

export default ToolNavBar;
