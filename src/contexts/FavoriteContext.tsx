import React, { createContext, useEffect, useState } from 'react';
import { pagesNumberContructor } from '../components/PageTurners';
import { IData } from '../interfaces/IFormData';
import { dataInitialState } from '../services/utils';

const FavoriteContext = createContext({
  favorite: dataInitialState,
  pageFavorites: dataInitialState,
  pages: pagesNumberContructor(1, 1),
  page: 1,
});
const SetFavorite = createContext<null | React.Dispatch<
  React.SetStateAction<IData[]>
>>(null);
const SetPage = createContext<null | React.Dispatch<
  React.SetStateAction<number>
>>(null);

const FavoriteContextProvider: React.FC = ({ children }) => {
  const localStorageData = JSON.parse(localStorage.getItem('favorites'));

  const contextInitialData: IData[] = !!localStorageData
    ? localStorageData
    : dataInitialState;

  const [favorite, setFavorite] = useState(contextInitialData);

  const [pageFavorites, setPageFavorites] = useState(contextInitialData);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(pagesNumberContructor(1, 1));

  useEffect(() => {
    const initialSlice = page * 10 - 10;
    const totalData: IData[] = !!favorite ? favorite : dataInitialState;
    const data = totalData.slice(initialSlice, initialSlice + 10);
    console.log(data);

    setPageFavorites(data);
  }, [favorite, page]);

  useEffect(() => {
    const totalHits = favorite.length;

    const favoritesPages = pagesNumberContructor(page, totalHits);
    setPages(favoritesPages);
  }, [favorite, page]);

  return (
    <FavoriteContext.Provider
      value={{
        favorite: favorite,
        pageFavorites: pageFavorites,
        page: page,
        pages: pages,
      }}
    >
      <SetPage.Provider value={setPage}>
        <SetFavorite.Provider value={setFavorite}>
          {children}
        </SetFavorite.Provider>
      </SetPage.Provider>
    </FavoriteContext.Provider>
  );
};

export { FavoriteContextProvider, SetFavorite, FavoriteContext, SetPage };
