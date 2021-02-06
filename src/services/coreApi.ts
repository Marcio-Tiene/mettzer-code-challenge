import axios from 'axios';

const coreApi = axios.create({
  baseURL: 'https://core.ac.uk:443/api-v2/search',
});

interface IQueryObject {
  authors?: string;
  title?: string;
  description?: string;
  page?: number;
}

const ApiQueryConstructor = (data: IQueryObject) => {
  const queryKeys = ['authors', 'title', 'description', 'page'];

  const apiSearchUri = queryKeys
    .filter((key) => data[key] && key !== 'page')
    .map((key) => `${key}%3A${data[key]}`)
    .join('%20AND%20');

  return apiSearchUri;
};

export const researchGet = async (data: IQueryObject, page: number = 1) => {
  try {
    const researchQuery = ApiQueryConstructor(data);
    const response = (
      await coreApi.get(
        `/${researchQuery}?page=${page}&apiKey=${process.env.REACT_APP_CORE_API_KEY}`
      )
    ).data;
    return response;
  } catch (err) {
    throw err;
  }
};

export default coreApi;
