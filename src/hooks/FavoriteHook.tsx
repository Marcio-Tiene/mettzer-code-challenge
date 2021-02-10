import { useContext } from 'react';
import { FavoriteContext, SetFavorite } from '../contexts/FavoriteContext';

import { IData } from '../interfaces/IFormData';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FavoriteHook = () => {
  const { favorite, pageFavorites, pages } = useContext(FavoriteContext);
  const setFavorite = useContext(SetFavorite) as React.Dispatch<
    React.SetStateAction<IData[]>
  >;

  return { favorite, pageFavorites, pages, setFavorite };
};

export default FavoriteHook;
