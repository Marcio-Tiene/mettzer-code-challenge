import React, { useState } from 'react';
import FavoriteHook from '../../hooks/FavoriteHook';
import { IData } from '../../interfaces/IFormData';
import {
  deleteFavorite,
  isFavored,
  postFavorite,
} from '../../services/localStorageHandler';
import { dataInitialState } from '../../services/utils';
import {
  ArticleTitle,
  ArticleTitleContainer,
  CardArticle,
  IdentifiersContainer,
  StarSpan,
  StartIconChecked,
  StartIconUnChecked,
  Description,
  LinkContainer,
  ArticleLink,
} from './styles';

interface IArticleCard {
  data: IData;
  isfavoritesPage?: boolean;
}

const ArticleCard: React.FC<IArticleCard> = ({
  data,
  isfavoritesPage = false,
}) => {
  const { setFavorite } = FavoriteHook();
  const [isStarChecked, setStarChecked] = useState(isFavored(data.id));

  const starClickHandler = () => {
    setStarChecked((prevState) => !prevState);
    if (isfavoritesPage) {
      deleteFavorite(data.id);
      const favoriteLocalStorage: IData[] = JSON.parse(
        localStorage.getItem('favorites')
      );
      const favoriteData = !!favoriteLocalStorage
        ? favoriteLocalStorage
        : dataInitialState;
      setFavorite(favoriteData);
    }
    if (!isfavoritesPage) {
      isStarChecked ? deleteFavorite(data.id) : postFavorite(data);
      const favoriteLocalStorage: IData[] = JSON.parse(
        localStorage.getItem('favorites')
      );
      const favoriteData = !!favoriteLocalStorage
        ? favoriteLocalStorage
        : dataInitialState;
      setFavorite(favoriteData);
    }
  };

  return (
    <CardArticle key={data.id}>
      <ArticleTitleContainer>
        <StarSpan onClickCapture={starClickHandler}>
          {isStarChecked ? <StartIconChecked /> : <StartIconUnChecked />}
        </StarSpan>
        <ArticleTitle>{data.title}</ArticleTitle>
      </ArticleTitleContainer>
      <IdentifiersContainer>
        <h2>
          Autor{`(es)`}:{' '}
          {data.authors !== []
            ? data.authors.map((author, index) =>
                data.authors.length - 1 === index ? `${author}.` : `${author}, `
              )
            : 'Author não encontrado'}
        </h2>
        <h3>Tipo: {!!data.type ? data.type : 'Tipo não definido'}</h3>
      </IdentifiersContainer>
      <Description>
        <strong>Descrição:</strong>{' '}
        {!!data.description ? data.description : 'Descrição não encontrada'}
      </Description>
      <LinkContainer>
        {data.urls !== [] ? (
          data.urls.map((url, index) => (
            <p key={index}>
              Link {index + 1}:{' '}
              <ArticleLink href={url} target='_blank' rel='noopener noreferrer'>
                {url}
              </ArticleLink>
            </p>
          ))
        ) : (
          <p>Nenhum link encontrado</p>
        )}
      </LinkContainer>
    </CardArticle>
  );
};

export default ArticleCard;
