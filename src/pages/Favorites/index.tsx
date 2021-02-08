import React from 'react';
import PageDefault from '../../components/PageDefault';
import { useHistory, useParams } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';

import { pagesNumberContructor } from '../../components/PageTurners';
import SearchContent from '../../components/SearchContent';
import { favorite } from '../../services/localStorageHandler';
import { dataInitialState } from '../../services/utils';

const Favorites: React.FC = () => {
  const history = useHistory();
  const { id } = useParams<Record<string, string | undefined>>();
  const page = Number(id);
  const initialSlice = page * 10 - 10;

  const totalData = favorite || dataInitialState;

  const data = totalData.slice(initialSlice, initialSlice + 9);
  console.log(data);

  if (data.length === 0) history.push('/error');

  const totalHits = totalData.length;

  const pages = pagesNumberContructor(page, totalHits);

  return (
    <PageDefault breadCrumbs={<BreadCrumb tool='Favoritos' page={page} />}>
      <SearchContent isFavoritePage={true} data={data} pages={pages} />
    </PageDefault>
  );
};

export default Favorites;
