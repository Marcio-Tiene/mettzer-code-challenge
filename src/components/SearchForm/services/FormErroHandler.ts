import { IFormData } from '../index';
const noQueryError = {
  message: 'NO_QUERY',
  error: {
    authors: 'Precisamos de pelo menos um campo preenchido',
    title: 'Precisamos de pelo menos um campo preenchido',
    description: 'Precisamos de pelo menos um campo preenchido',
  },
};
export const hasNoInputerros = {
  authors: false,
  title: false,
  description: false,
};

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
    throw noQueryError;
  }
};
