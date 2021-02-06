import axios from 'axios';

const coreApi = axios.create({
  baseURL: 'https://core.ac.uk:443/api-v2/articles/search',
});

interface IQueryObject {
  authors?: string;
  title?: string;
  description?: string;
  page?: number;
}
const queryKeys = ['authors', 'title', 'description', 'page'];
const queryAndJoiner = '%20AND%20';

const exactSearchQuery = (queryValue: string) => {
  const splitedQuery = queryValue.split(' ');

  const joinedWithAndQeury = splitedQuery.join(queryAndJoiner);

  const constructedQuery = joinedWithAndQeury.includes(queryAndJoiner)
    ? `(${joinedWithAndQeury})`
    : joinedWithAndQeury;

  return constructedQuery;
};

const ApiQueryConstructor = (data: IQueryObject) => {
  const apiSearchUri = queryKeys
    .filter((key) => data[key] && exactSearchQuery(key) !== 'page')
    .map((key) => `${key}%3A${exactSearchQuery(data[key])}`)
    .join(queryAndJoiner);

  return apiSearchUri;
};

export const researchGet = async (data: IQueryObject, page: number = 1) => {
  try {
    const researchQuery = ApiQueryConstructor(data);
    const response = await coreApi.get(
      `/${researchQuery}?page=${page}&apiKey=${process.env.REACT_APP_CORE_API_KEY}`
    );
    console.log(response);

    if (!response.data.data) throw Error(`${response.data.status}`);

    return response.data;
  } catch (err) {
    throw err;
  }
};

export default coreApi;
