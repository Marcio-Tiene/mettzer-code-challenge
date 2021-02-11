import React from 'react';
import { useHistory, useLocation } from 'react-router';
import {
  EtceteraSpan,
  Pagebutton,
  PageButtonsContainer,
  PageTurnerContent,
} from './styles';

export interface IPageTurner {
  previewsPreviewsPage: number;
  previewsPage: number;
  actualPage: number;
  nextPage: number;
  nextNextPage: number;
  lastPage: number;
}
interface IPages {
  pages: IPageTurner;
  isFavoritePage: boolean;
}

const pageCounter = (totlaHits: number, articlesPerPage: number = 10) => {
  const maxPages = Math.ceil(totlaHits / articlesPerPage);

  const totalpages = maxPages < 100 ? maxPages : 100;

  return totalpages;
};
export const initialPages = {
  previewsPreviewsPage: 0,
  previewsPage: 0,
  actualPage: 0,
  nextPage: 0,
  nextNextPage: 0,
  lastPage: 0,
};

export const pagesNumberContructor = (page: number, totalHits: number) => ({
  previewsPreviewsPage: page - 2,
  previewsPage: page - 1,
  actualPage: page,
  nextPage: page + 1,
  nextNextPage: page + 2,
  lastPage: pageCounter(totalHits),
});

const PageTurners: React.FC<IPages> = ({ pages, isFavoritePage }) => {
  const history = useHistory();
  const href = (useLocation().pathname + useLocation().search).split('page=');
  const OnClick = (page: number) => {
    if (isFavoritePage) {
      history.push(`/favorite/${page}`);
      console.log(`/${page}`);
    }

    if (!isFavoritePage) {
      const targetHref = `${href[0]}page=${page}`;

      history.push(targetHref);
    }
  };
  return (
    <PageTurnerContent>
      Páginas:
      <PageButtonsContainer>
        {pages.previewsPreviewsPage > 1 && (
          <>
            <Pagebutton onClickCapture={() => OnClick(1)}>1</Pagebutton>
            <EtceteraSpan>...</EtceteraSpan>
            <Pagebutton
              onClickCapture={() => OnClick(pages.previewsPreviewsPage)}
            >
              {pages.previewsPreviewsPage}
            </Pagebutton>
          </>
        )}

        {pages.previewsPage >= 1 && (
          <Pagebutton onClickCapture={() => OnClick(pages.previewsPage)}>
            {pages.previewsPage}
          </Pagebutton>
        )}

        <EtceteraSpan className='actual-page'>{pages.actualPage}</EtceteraSpan>

        {pages.nextPage <= pages.lastPage && (
          <Pagebutton onClickCapture={() => OnClick(pages.nextPage)}>
            {pages.nextPage}
          </Pagebutton>
        )}
        {pages.nextNextPage < pages.lastPage && (
          <>
            <Pagebutton onClickCapture={() => OnClick(pages.nextNextPage)}>
              {pages.nextNextPage}
            </Pagebutton>

            <EtceteraSpan>...</EtceteraSpan>
            <Pagebutton onClickCapture={() => OnClick(pages.lastPage)}>
              {pages.lastPage}
            </Pagebutton>
          </>
        )}
      </PageButtonsContainer>
    </PageTurnerContent>
  );
};

export default PageTurners;
