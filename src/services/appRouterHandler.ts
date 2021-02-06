import { IFormData } from '../interfaces/IFormData';

const targetPageUrl = (data: IFormData, page: number = 1) => {
  const authors = !!data.authors ? `authors=${data.authors}` : '';
  const title = !!data.title ? `title=${data.title}` : '';
  const description = !!data.description
    ? `description=${data.description}`
    : '';
  const targetPage = `&page=${page}`;

  const querryArray = [authors, title, description];

  const queryString = querryArray
    .filter((queryArgument) => queryArgument !== '')
    .join('&');

  const pageUrl = `articles?${queryString}${targetPage}`;

  return pageUrl;
};

export default targetPageUrl;
