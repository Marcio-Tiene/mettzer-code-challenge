import { IFormData } from '../../../interfaces/IFormData';

const noQueryError = {
  message: 'NO_QUERY',
  error: {
    authors: 'Precisamos de pelo menos um campo preenchido',
    title: 'Precisamos de pelo menos um campo preenchido',
  },
};
export const hasNoInputerros = {
  authors: false,
  title: false,
};

export const hasQuery = (data: IFormData) => {
  const noData: IFormData = {
    authors: '',
    title: '',
  };

  if (data.authors === noData.authors && data.title === noData.title) {
    throw noQueryError;
  }
};
