import React, { useEffect, useState } from 'react';
import PageDefault from '../../components/PageDefault';
import { useHistory, useLocation } from 'react-router-dom';
import BreadCrumb from '../../components/BreadCrumb';
import { capitalize, capitalizeAllWords } from '../../services/utils';
import { IData, IFormData } from '../../interfaces/IFormData';
import { researchGet } from '../../services/coreApi';
import PageLoadingSpiner from '../../components/PageLoadingSpinner';
import Button from '../../components/Button';
import { AiTwotoneStar } from 'react-icons/ai';
import ArticleCard from '../../components/ArticleCard';

const articlePerPage = 10;

const pageCounter = (totlaHits: number) => {
  const maxPages = Math.ceil(totlaHits / articlePerPage);

  const totalpages = maxPages < 100 ? maxPages : 100;

  return totalpages;
};

const initialPages = {
  firstPage: 1,
  previewsPage: 0,
  previewPreviewPage: 0,
  actualPage: 0,
  nextPage: 0,
  nextNextpage: 0,
  lastPage: 0,
};

const pagesNumberContructor = (page: number, totalHits: number) => ({
  firstPage: 1,
  previewsPage: page - 2,
  previewPreviewPage: page - 1,
  actualPage: page,
  nextPage: page + 1,
  nextNextpage: page + 2,
  lastPage: pageCounter(totalHits),
});

const CoreResultPage: React.FC = () => {
  const windowRef = window.location.href;
  const history = useHistory();
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  const [data, setData] = useState(null as IData[]);
  const [pages, setPages] = useState(initialPages);

  const query = useQuery();

  const queryObject: IFormData = {
    authors: query.get('authors') || '',
    title: query.get('title') || '',
  };

  const page = Number(query.get('page')) || 1;

  const errorPath = '/error' + useLocation().pathname + useLocation().search;

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
        {data !== null ? (
          <>
            {data.map((data) => (
              <ArticleCard key={data.id} data={data} />
            ))}

            <div style={{ display: 'flex', gap: '5px' }}>
              {pages.previewPreviewPage > 0 && (
                <Button label={`${pages.firstPage}`} />
              )}
              {pages.previewPreviewPage > 0 && (
                <Button label={`${pages.previewPreviewPage}`} />
              )}
              {pages.previewsPage > 0 && (
                <Button label={`${pages.previewsPage}`} />
              )}

              <Button label={`${pages.actualPage}`} />

              {pages.nextPage < pages.lastPage && (
                <Button label={`${pages.nextPage}`} />
              )}
              {pages.nextNextpage < pages.lastPage && (
                <Button label={`${pages.nextNextpage}`} />
              )}
              {pages.nextNextpage < pages.lastPage && (
                <Button label={`${pages.lastPage}`} />
              )}
            </div>
          </>
        ) : (
          <PageLoadingSpiner />
        )}
      </section>
    </PageDefault>
  );
};

export default CoreResultPage;
