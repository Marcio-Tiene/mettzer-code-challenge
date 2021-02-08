import { IData } from '../interfaces/IFormData';

export const favorite: IData[] = JSON.parse(localStorage.getItem('favorites'));

export const postFavorite = (data: IData) => {
  if (!!localStorage.getItem('favorites')) {
    const initialState = JSON.parse(localStorage.getItem('favorites'));

    initialState.push(data);

    localStorage.removeItem('favorites');
    localStorage.setItem('favorites', JSON.stringify(initialState));
  } else {
    const initialState = [];

    initialState.push(data);

    localStorage.removeItem('favorites');
    localStorage.setItem('favorites', JSON.stringify(initialState));
  }
};

export const deleteFavorite = (id: string) => {
  if (!!localStorage.getItem('favorites')) {
    const newData = JSON.parse(localStorage.getItem('favorites')).filter(
      (data) => data.id !== id
    );
    localStorage.removeItem('favorites');

    localStorage.setItem('favorites', JSON.stringify(newData));
  } else {
    return;
  }
};

export const isFavored = (id: string) =>
  favorite.some((data) => data.id === id);
