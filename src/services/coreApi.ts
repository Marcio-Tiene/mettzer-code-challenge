import axios from 'axios';

const coreApi = axios.create({
  baseURL: 'https://core.ac.uk:443/api-v2/search',
});

interface IQueryObject {
  authors?: string;
  title?: string;

  page?: number;
}
const queryKeys = ['authors', 'title'];
const queryAndJoiner = '%20AND%20';

const exactSearchQuery = (queryValue: string, key: string) => {
  const splitedQuery =
    key === 'authors'
      ? queryValue
          .split('/')
          .map((query) => `"${query.trim()}"`)
          .join(queryAndJoiner)
      : `"${queryValue}"`;

  const constructedQuery = encodeURI(`(${splitedQuery})`);

  return constructedQuery;
};

const ApiQueryConstructor = (data: IQueryObject) => {
  const apiSearchUri = queryKeys
    .filter((key) => data[key] && key !== 'page')
    .map((key) => `${key}%3A${exactSearchQuery(data[key], key)}`)
    .join(queryAndJoiner);
  return apiSearchUri;
};

export const researchGet = async (data: IQueryObject, page: number = 1) => {
  try {
    const researchQuery = ApiQueryConstructor(data);
    const response = await coreApi.get(
      `/${researchQuery}?page=${page}&apiKey=${process.env.REACT_APP_CORE_API_KEY}`
    );

    if (!response.data.data) throw Error(`${response.data.status}`);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export default coreApi;
