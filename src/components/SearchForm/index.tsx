import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../Input';
import TextArea from '../TextArea';
import FormContainer, { CloseIcon, FormTitle } from './styles';
import ModalBackground from '../ModalBackground';
import Button from '../Button';
import { hasQuery, noQueryError } from './services/FormErroHandler';
import { GiArchiveResearch } from 'react-icons/gi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import FormOpenHook from '../../hooks/FormOpenHook';

export interface IFormData {
  authors: string;
  title: string;
  description: string;
}
const SearchForm: React.FC = () => {
  const hasNoInputerros = { authors: false, title: false, description: false };
  const [hasInputError, setHasInputError] = useState(hasNoInputerros);
  const [isLoading, setIsLoading] = useState(false);

  const { setIsFormOpen, isFormOpen } = FormOpenHook();

  const insertInputError = () => {
    const insertUniqueError = (inputName: string): void => {
      setHasInputError((prevState) => {
        return { ...prevState, [inputName]: true };
      });
      formRef.current?.setFieldError(inputName, '');
    };
    for (const field in noQueryError) {
      insertUniqueError(field);
    }
  };
  const clearInputError = () => {
    const clearUniqueError = (inputName: string): void => {
      setHasInputError((prevState) => {
        return { ...prevState, [inputName]: false };
      });
      formRef.current?.setFieldError(inputName, '');
    };
    for (const field in noQueryError) {
      clearUniqueError(field);
    }
  };

  const handleFormClose = () => {
    setIsFormOpen(false);
    clearInputError();
  };

  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<IFormData> = (data) => {
    try {
      setIsLoading(true);
      hasQuery(data);
      console.log(data);

      clearInputError();
      setIsLoading(false);
      handleFormClose();
    } catch (err) {
      if (err.message === 'NO_DATA') {
        console.log(formRef.current);
        insertInputError();
        formRef.current?.setErrors(noQueryError);
        setIsLoading(false);
      }
    }
  };
  return (
    <ModalBackground show={isFormOpen} open={isFormOpen}>
      <FormContainer onSubmit={handleSubmit} autoComplete='off' ref={formRef}>
        <FormTitle>
          <AiOutlineFileSearch size={25} /> Pesquise material científico no CORE
          buscando por pelo menos um dos campos abaixo.
        </FormTitle>

        <Input
          label='Author:'
          name='authors'
          hasError={hasInputError.authors}
          onFocus={clearInputError}
        />
        <Input
          label='Titulo:'
          name='title'
          hasError={hasInputError.title}
          onFocus={clearInputError}
        />
        <TextArea
          label='Descrição:'
          name='description'
          hasError={hasInputError.description}
          onFocus={clearInputError}
        />
        <Button
          className='form-search-button'
          Icon={GiArchiveResearch}
          iconSize={2}
          isLoadindig={isLoading}
          label='Buscar'
        />
        <CloseIcon size={20} onClickCapture={handleFormClose} />
      </FormContainer>
    </ModalBackground>
  );
};
export default SearchForm;
