import React from 'react';
import { IconType } from 'react-icons';
import { Link } from 'react-router-dom';
import { IData } from '../../interfaces/IFormData';
import { CardArticle } from './styles';
interface IArticleCard {
  data: IData;
  iconOnClick?: (data: IData) => void;
  Icon: IconType;
}

const ArticleCard: React.FC<IArticleCard> = ({ data, Icon, iconOnClick }) => {
  return (
    <CardArticle key={data.id}>
      <h1>
        <Icon
          size={18}
          onClick={() => {
            !!iconOnClick && iconOnClick(data);
          }}
        />{' '}
        Título: {data.title}
      </h1>

      <h2>Tipo: {!!data.type ? data.type : 'Tipo não definido'}</h2>
      <p>
        Autor{`(es)`}:
        {data.authors !== []
          ? data.authors.map((author, index) =>
              data.authors.length - 1 === index ? `${author}.` : `${author}, `
            )
          : 'Author não encontrado'}
      </p>
      <p>
        Descrição:
        {!!data.description ? data.description : 'Descrição não encontrada'}
      </p>
      {data.urls !== [] ? (
        data.urls.map((url, index) => (
          <p key={index}>
            Link {index + 1}:{' '}
            <Link to={url} target='_blank' rel='noopener noreferrer'>
              {url}
            </Link>
          </p>
        ))
      ) : (
        <p>Nenhum link encontrado</p>
      )}
    </CardArticle>
  );
};

export default ArticleCard;
