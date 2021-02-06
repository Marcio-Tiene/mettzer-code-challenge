import React from 'react';
import BreadCrumbTag from './BreadCrumbTag';
import { FaFilePdf } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';

interface IBreadCrumb {
  authors?: string;
  title?: string;
  description?: string;
  page: number;
  tool: string;
}

const BreadCrumb: React.FC<IBreadCrumb> = ({
  authors,
  title,
  description,
  page,
  tool,
}) => {
  return (
    <>
      <BreadCrumbTag>
        <FaFilePdf size={18} />
        Resultado {tool}
      </BreadCrumbTag>
      {!!authors && (
        <BreadCrumbTag>
          <IoIosArrowForward size={18} />
          Autor: {authors}
        </BreadCrumbTag>
      )}
      {!!title && (
        <BreadCrumbTag>
          <IoIosArrowForward size={18} />
          Título: {title}
        </BreadCrumbTag>
      )}
      {!!description && !title && !authors && (
        <BreadCrumbTag>
          <IoIosArrowForward size={18} />
          Busca por descrição : {description.substr(0, 10)}
          ...
        </BreadCrumbTag>
      )}
      {!!page && (
        <BreadCrumbTag>
          <IoIosArrowForward size={18} />
          Página: {page}
        </BreadCrumbTag>
      )}
    </>
  );
};

export default BreadCrumb;
