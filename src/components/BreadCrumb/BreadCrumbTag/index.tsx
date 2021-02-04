import React from 'react';
import { BreadCrumbContent } from './styles';

const BreadCrumbTag: React.FC = ({ children }) => {
  return (
    <>
      <BreadCrumbContent>{children}</BreadCrumbContent>
    </>
  );
};

export default BreadCrumbTag;
