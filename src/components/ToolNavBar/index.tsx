import React from 'react';
import Button from '../Button';
import NavBar from './styles';
import { RiFileSearchLine } from 'react-icons/ri';
import { AiTwotoneStar } from 'react-icons/ai';

import FormOpenHook from '../../hooks/FormOpenHook';
import { useHistory } from 'react-router';

interface IToolNavBar {
  breadCrumbs?: React.ReactChild;
  className?: string;
}

const ToolNavBar: React.FC<IToolNavBar> = ({ children, className }) => {
  const history = useHistory();
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
      <Button
        className='secondary-action-filled'
        label='Favoritos'
        Icon={AiTwotoneStar}
        iconSize={2}
        onClick={() => history.push('/favorites/1')}
      />
    </NavBar>
  );
};

export default ToolNavBar;
