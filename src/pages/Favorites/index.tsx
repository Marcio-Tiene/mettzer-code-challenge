import React from 'react';
import PageDefault from '../../components/PageDefault';
import BreadCrumb from '../../components/BreadCrumb';

import SearchContent from '../../components/SearchContent';
import FavoriteHook from '../../hooks/FavoriteHook';
import { useParams } from 'react-router';

const Favorites: React.FC = () => {
  const { pages, pageFavorites, setPage } = FavoriteHook();

  const { id } = useParams<Record<string, string | undefined>>();

  setPage(Number(id));

  return (
    <PageDefault
      breadCrumbs={<BreadCrumb tool='Favoritos' page={pages.actualPage} />}
    >
      <SearchContent isFavoritePage={true} data={pageFavorites} pages={pages} />
    </PageDefault>
  );
};

export default Favorites;
