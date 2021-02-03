import React from 'react';
import Header from '../Header';
import ToolNavBar from '../ToolNavBar';
interface IPageDefault {
  breadCrumbs: React.ReactChild;
}

const PageDefault: React.FC<IPageDefault> = ({ breadCrumbs, children }) => {
  return (
    <>
      <Header />
      <ToolNavBar>{breadCrumbs}</ToolNavBar>
      {children}
    </>
  );
};

export default PageDefault;
