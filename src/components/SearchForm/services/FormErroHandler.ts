import { IFormData } from '../index';

export const hasQuery = (data: IFormData) => {
  const noData: IFormData = {
    authors: '',
    title: '',
    description: '',
  };

  if (
    data.authors === noData.authors &&
    data.title === noData.title &&
    data.description === noData.description
  ) {
    throw new Error('NO_DATA');
  }
};

export const noQueryError = {
  authors: 'Precisamos de pelo menos um campo preenchido',
  title: 'Precisamos de pelo menos um campo preenchido',
  description: 'Precisamos de pelo menos um campo preenchido',
};
