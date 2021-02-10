import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import BreadCrumb from '../../components/BreadCrumb';

import SearchContent from '../../components/SearchContent';
import FavoriteHook from '../../hooks/FavoriteHook';
import { useParams } from 'react-router';

const Favorites: React.FC = () => {
  const [actualPage, setActualPage] = useState(1);
  const { pages, pageFavorites, setPage } = FavoriteHook();

  const { id } = useParams<Record<string, string | undefined>>();

  useEffect(() => {
    setActualPage(Number(id));

    setPage(Number(id));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actualPage, id]);

  return (
    <PageDefault
      breadCrumbs={<BreadCrumb tool='Favoritos' page={pages.actualPage} />}
    >
      <SearchContent isFavoritePage={true} data={pageFavorites} pages={pages} />
    </PageDefault>
  );
};

export default Favorites;
