import React from 'react';
import BreadCrumbTag from '../../components/BreadCrumb/BreadCrumbTag';
import PageDefault from '../../components/PageDefault';
import { FaFilePdf } from 'react-icons/fa';

const Home: React.FC = () => {
  return (
    <PageDefault
      breadCrumbs={
        <BreadCrumbTag>
          <FaFilePdf size={18} />
          Buscar material científico no CORE
        </BreadCrumbTag>
      }
    >
      <section style={{ flex: 1 }}></section>
    </PageDefault>
  );
};

export default Home;
