import React from 'react';
import Button from '../Button';
import NavBar from './styles';
import { RiFileSearchLine } from 'react-icons/ri';
import { AiTwotoneStar } from 'react-icons/ai';

import FormOpenHook from '../../hooks/FormOpenHook';

interface IToolNavBar {
  breadCrumbs?: React.ReactChild;
  className?: string;
}

const ToolNavBar: React.FC<IToolNavBar> = ({ children, className }) => {
  const { setIsFormOpen } = FormOpenHook();
  return (
    <NavBar className={className}>
      <NavBar.BreadCrumbs className={className}>{children}</NavBar.BreadCrumbs>
      <Button
        label='Pesquisar'
        Icon={RiFileSearchLine}
        iconSize={2}
        onClick={() => setIsFormOpen(true)}
      />
      <a href='/favorites/1'>
        <Button
          className='secondary-action-filled'
          label='Favoritos'
          Icon={AiTwotoneStar}
          iconSize={2}
        />
      </a>
    </NavBar>
  );
};

export default ToolNavBar;
