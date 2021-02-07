import React from 'react';
import BreadCrumbTag from '../../components/BreadCrumb/BreadCrumbTag';
import Header from '../../components/Header';
import ToolNavBar from '../../components/ToolNavBar';
import { MdMoodBad } from 'react-icons/md';

const Error404: React.FC = () => {
  return (
    <>
      <Header />
      <ToolNavBar>
        <BreadCrumbTag>
          <MdMoodBad />
          Error 404: Bad Request
        </BreadCrumbTag>
      </ToolNavBar>
    </>
  );
};

export default Error404;
