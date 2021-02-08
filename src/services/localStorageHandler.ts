import { IData } from '../interfaces/IFormData';
import { dataInitialState } from './utils';

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
      (data: IData) => data.id !== id
    );
    localStorage.removeItem('favorites');

    localStorage.setItem('favorites', JSON.stringify(newData));
  } else {
    return;
  }
};

const filterData: IData[] =
  JSON.parse(localStorage.getItem('favorites')) || dataInitialState;

export const isFavored = (id: string) =>
  filterData.some((data) => data.id === id);
