import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { useHistory, useLocation } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import { capitalize, capitalizeAllWords } from '../../services/utils';
import { IFormData } from '../../interfaces/IFormData';
import { researchGet } from '../../services/coreApi';
import PageLoadingSpiner from '../../components/PageLoadingSpinner';

interface IData {
  id: string;
  authors: string[];
  type: string;
  description: string;
  title: string;
  urls: string[];
}

const articlePerPage = 10;

const pageCounter = (totlaHits: number) =>
  Math.ceil(totlaHits / articlePerPage);

const CoreResultPage: React.FC = () => {
  const windowRef = window.location.href;
  const history = useHistory();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const [data, setData] = useState(null as IData[]);
  const [totalPages, setTotalPages] = useState(0);

  const query = useQuery();

  const queryObject: IFormData = {
    authors: query.get('authors') || '',
    title: query.get('title') || '',
  };

  const page = Number(query.get('page')) || 1;

  const errorPath = '/error' + useLocation().pathname + useLocation().search;
  console.log(errorPath);

  useEffect(() => {
    (async () => {
      setData(null);
      try {
        const response: any = await researchGet(queryObject, page);

        setTotalPages(pageCounter(response.totalHits));

        const filteredResponse: IData[] = response.data.map((data) => {
          return {
            id: data._id,
            authors: data._source.authors,
            type: data._type,
            description: data._source.description,
            title: data._source.title,
            urls: data._source.urls,
          };
        });

        setData(filteredResponse);
      } catch (err) {
        console.log(err);
        history.push(errorPath);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windowRef]);

  return (
    <PageDefault
      breadCrumbs={
        <BreadCrumb
          tool='Core'
          authors={capitalizeAllWords(queryObject.authors)}
          title={capitalize(queryObject.title)}
          page={page}
        />
      }
    >
      <section
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {!!data ? (
          <>
            {totalPages === 1 ? (
              <h1> 1 Página</h1>
            ) : (
              <h1>{totalPages} Páginas</h1>
            )}
            <ul>
              {data.map((data) => (
                <li key={data.id}>
                  <h4>{decodeURI(data.title)}</h4> {data.type}{' '}
                  {data.authors.join(', ')}{' '}
                  {data.urls.map((url) => (
                    <a href={url} key={url + data.id}>
                      {' '}
                      {url}
                    </a>
                  ))}
                </li>
              ))}
            </ul>
          </>
        ) : (
          <PageLoadingSpiner />
        )}
      </section>
    </PageDefault>
  );
};

export default CoreResultPage;
