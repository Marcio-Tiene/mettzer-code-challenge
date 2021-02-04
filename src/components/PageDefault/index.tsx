import React from 'react';
import Footer from '../Footer';
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
      <Footer />
    </>
  );
};

export default PageDefault;
