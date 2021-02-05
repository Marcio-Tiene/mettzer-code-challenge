import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../Input';
import TextArea from '../TextArea';
import FormContainer, { CloseIcon, FormTitle } from './styles';
import ModalBackground from '../ModalBackground';
import Button from '../Button';
import { hasNoInputerros, hasQuery } from './services/FormErroHandler';
import { GiArchiveResearch } from 'react-icons/gi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import FormOpenHook from '../../hooks/FormOpenHook';
import { researchGet } from './services/ApiHandler';

export interface IFormData {
  authors: string;
  title: string;
  description: string;
}
const SearchForm: React.FC = () => {
  const [hasInputError, setHasInputError] = useState(hasNoInputerros);
  const [isLoading, setIsLoading] = useState(false);

  const { setIsFormOpen, isFormOpen } = FormOpenHook();

  const insertInputError = (inputName: string): void => {
    setHasInputError((prevState) => {
      return { ...prevState, [inputName]: true };
    });
    formRef.current?.setFieldError(inputName, '');
  };

  const clearInputError = (inputName: string): void => {
    setHasInputError((prevState) => {
      return { ...prevState, [inputName]: false };
    });
    formRef.current?.setFieldError(inputName, '');
  };

  const clearInputErrorOnFocus = (
    event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => clearInputError(event.target.id);

  const clearAllInputError = () => {
    for (const field in hasInputError) {
      clearInputError(field);
    }
  };

  const handleFormClose = () => {
    setIsLoading(false);
    setIsFormOpen(false);
    clearAllInputError();
    for (const field in hasInputError) formRef.current.setFieldValue(field, '');
  };

  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<IFormData> = async (data, { reset }) => {
    try {
      setIsLoading(true);
      hasQuery(data);

      console.log(await researchGet(data));

      reset();
      handleFormClose();
    } catch (err) {
      if (err.message === 'NO_QUERY') {
        for (const error in err.error) {
          insertInputError(error);
        }
        formRef.current?.setErrors(err.error);
        setIsLoading(false);
      }

      setIsLoading(false);
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
          onFocus={clearInputErrorOnFocus}
        />
        <Input
          label='Titulo:'
          name='title'
          hasError={hasInputError.title}
          onFocus={clearInputErrorOnFocus}
        />
        <TextArea
          label='Descrição:'
          name='description'
          hasError={hasInputError.description}
          onFocus={clearInputErrorOnFocus}
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
