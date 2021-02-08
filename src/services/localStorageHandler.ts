import { IData } from '../interfaces/IFormData';

export const favorite: IData[] =
  JSON.parse(localStorage.getItem('favorites')) || ([] as IData[]);

export const postFavorite = (data: IData) => {
  const initialState = favorite;

  initialState.push(data);

  localStorage.removeItem('favorites');
  localStorage.setItem('favorites', JSON.stringify(initialState));
};

export const deleteFavorite = (id: string) => {
  const newData = favorite.filter((data) => data.id !== id);
  localStorage.removeItem('favorites');
  localStorage.setItem('favorites', JSON.stringify(newData));
};

export const isFavored = (id: string) =>
  favorite.some((data) => data.id === id);