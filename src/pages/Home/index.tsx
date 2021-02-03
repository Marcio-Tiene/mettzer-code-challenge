import React from 'react';
import PageDefault from '../../components/PageDefault';

const Home: React.FC = () => {
  return (
    <PageDefault breadCrumbs={<h1> Buscador de arquivos no Core</h1>}>
      <section style={{ flex: 1 }}></section>
    </PageDefault>
  );
};

export default Home;
