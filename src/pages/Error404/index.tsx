import React from 'react';
import BreadCrumbTag from '../../components/BreadCrumb/BreadCrumbTag';
import Header from '../../components/Header';
import ToolNavBar from '../../components/ToolNavBar';
import { MdMoodBad } from 'react-icons/md';

const Error404: React.FC = () => {
  return (
    <>
      <Header />
      <ToolNavBar className='error-404'>
        <BreadCrumbTag>
          <MdMoodBad />
          Error 404: Bad Request. Ops, a página não foi encontranda, continue a
          navegação indo para a home page
        </BreadCrumbTag>
      </ToolNavBar>
    </>
  );
};

export default Error404;
