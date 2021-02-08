import React from 'react';
import BreadCrumbTag from './BreadCrumbTag';
import { FaFilePdf } from 'react-icons/fa';
import { IoIosArrowForward } from 'react-icons/io';
import { BreadCrumbWrapper } from './styles';

interface IBreadCrumb {
  authors?: string;
  title?: string;

  page: number;
  tool: string;
}

const BreadCrumb: React.FC<IBreadCrumb> = ({
  authors,
  title,

  page,
  tool,
}) => {
  return (
    <BreadCrumbWrapper>
      <BreadCrumbTag>
        <FaFilePdf size={18} />
        Resultado {tool}
      </BreadCrumbTag>
      {!!authors && (
        <BreadCrumbTag>
          <IoIosArrowForward size={25} />
          Autor: {authors}
        </BreadCrumbTag>
      )}
      {!!title && (
        <BreadCrumbTag>
          <IoIosArrowForward size={25} />
          Título: {title}
        </BreadCrumbTag>
      )}

      {!!page && (
        <BreadCrumbTag>
          <IoIosArrowForward size={25} />
          Página: {page}
        </BreadCrumbTag>
      )}
    </BreadCrumbWrapper>
  );
};

export default BreadCrumb;
