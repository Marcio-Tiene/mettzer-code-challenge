import React from 'react';
import PageDefault from '../../components/PageDefault';
import { useLocation } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';

interface IQueryObject {
  authors?: string;
  title?: string;
  description?: string;
  page?: number;
}

const Articles: React.FC = () => {
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };
  const query = useQuery();

  const queryKeys = ['authors', 'title', 'description', 'page'];

  const apiSearchUri = queryKeys
    .filter((key) => !!query.get(key) && key !== 'page')
    .map((key) => `${key}%3A${query.get(key)}`)
    .join('%20AND%20');

  console.log(apiSearchUri);

  const queryObject: IQueryObject = queryKeys.reduce((object, key) => {
    return { ...object, [key]: query.get(key) };
  }, {});

  console.log(queryObject);

  return (
    <PageDefault
      breadCrumbs={
        <BreadCrumb
          tool='Core'
          authors={queryObject.authors}
          title={queryObject.title}
          description={queryObject.description}
          page={queryObject.page}
        />
      }
    >
      <section
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {' '}
        test
      </section>
    </PageDefault>
  );
};

export default Articles;
