import React from 'react';
import { IData } from '../../interfaces/IFormData';
import ArticleCard from '../ArticleCard';
import PageLoadingSpiner from '../PageLoadingSpinner';
import PageTurners, { IPageTurner } from '../PageTurners';

interface ISearchContent {
  data: IData[];
  pages: IPageTurner;
  starOnClick?: (data: IData) => void;
  isFavoritePage: boolean;
}

const SearchContent: React.FC<ISearchContent> = ({
  data,
  pages,
  starOnClick,
  isFavoritePage,
}) => {
  return (
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
          <PageTurners isFavoritePage={isFavoritePage} pages={pages} />
          {data.map((data) => (
            <ArticleCard
              isfavoritesPage={isFavoritePage}
              key={data.id + data.type}
              data={data}
            />
          ))}

          <PageTurners isFavoritePage={isFavoritePage} pages={pages} />
        </>
      ) : (
        <PageLoadingSpiner />
      )}
    </section>
  );
};

export default SearchContent;
