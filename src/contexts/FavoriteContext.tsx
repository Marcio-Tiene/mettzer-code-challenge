import React, { createContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { pagesNumberContructor } from '../components/PageTurners';
import { IData } from '../interfaces/IFormData';
import { dataInitialState } from '../services/utils';

const FavoriteContext = createContext({
  favorite: dataInitialState,
  pageFavorites: dataInitialState,
  pages: pagesNumberContructor(1, 1),
});
const SetFavorite = createContext<null | React.Dispatch<
  React.SetStateAction<IData[]>
>>(null);

const FavoriteContextProvider: React.FC = ({ children }) => {
  const localStorageData = JSON.parse(localStorage.getItem('favorites'));

  const contextInitialData: IData[] = !!localStorageData
    ? localStorageData
    : dataInitialState;

  const { id } = useParams<Record<string, string | undefined>>();
  const page = Number(id);
  const [favorite, setFavorite] = useState(contextInitialData);

  const [pageFavorites, setPageFavorites] = useState(contextInitialData);
  const [pages, setPages] = useState(pagesNumberContructor(1, 1));

  useEffect(() => {
    const totalHits = favorite.length;

    const favoritesPages = pagesNumberContructor(page, totalHits);
    setPages(favoritesPages);
    const initialSlice = page * 10 - 10;
    const totalData: IData[] = !!favorite ? favorite : dataInitialState;
    const data = totalData.slice(initialSlice, initialSlice + 9);
    console.log(data);

    setPageFavorites(data);
  }, [favorite, page]);

  return (
    <FavoriteContext.Provider
      value={{ favorite: favorite, pageFavorites: pageFavorites, pages: pages }}
    >
      <SetFavorite.Provider value={setFavorite}>
        {children}
      </SetFavorite.Provider>
    </FavoriteContext.Provider>
  );
};

export { FavoriteContextProvider, SetFavorite, FavoriteContext };
