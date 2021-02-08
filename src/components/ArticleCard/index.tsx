import React, { useState } from 'react';
import { IData } from '../../interfaces/IFormData';
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
  starOnClick?: (data: IData) => void;
  isFavored?: boolean;
}

const ArticleCard: React.FC<IArticleCard> = ({
  data,
  isFavored = true,
  starOnClick,
}) => {
  const [isStarChecked, setStarChecked] = useState(isFavored);
  const starClickHandler = () => {
    starOnClick && starOnClick(data);

    setStarChecked((prevState) => !prevState);
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
              <ArticleLink to={url} target='_blank' rel='noopener noreferrer'>
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
