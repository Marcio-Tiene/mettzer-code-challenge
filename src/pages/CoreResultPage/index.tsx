import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { useHistory, useLocation } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import {
  capitalize,
  capitalizeAllWords,
  dataInitialState,
} from '../../services/utils';
import { IData, IFormData } from '../../interfaces/IFormData';
import { researchGet } from '../../services/coreApi';

import {
  initialPages,
  pagesNumberContructor,
} from '../../components/PageTurners';
import SearchContent from '../../components/SearchContent';

const CoreResultPage: React.FC = () => {
  const windowRef = window.location.href;

  const history = useHistory();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const [data, setData] = useState(dataInitialState);
  const [pages, setPages] = useState(initialPages);

  const query = useQuery();

  const queryObject: IFormData = {
    authors: query.get('authors') || '',
    title: query.get('title') || '',
  };

  const page = Number(query.get('page')) || 1;

  useEffect(() => {
    (async () => {
      setData(null);
      try {
        const response: any = await researchGet(queryObject, page);

        setPages(pagesNumberContructor(page, response.totalHits));

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
        history.push('/error');
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
      <SearchContent
        isFavoritePage={false}
        starOnClick={(data) => console.log(data)}
        data={data}
        pages={pages}
      />
    </PageDefault>
  );
};

export default CoreResultPage;
