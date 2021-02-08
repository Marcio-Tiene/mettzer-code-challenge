import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../Input';
import FormContainer, { CloseIcon, FormTitle } from './styles';
import ModalBackground from '../ModalBackground';
import Button from '../Button';
import { hasNoInputerros, hasQuery } from './services/FormErroHandler';
import { GiArchiveResearch } from 'react-icons/gi';
import { AiOutlineFileSearch } from 'react-icons/ai';
import FormOpenHook from '../../hooks/FormOpenHook';
import { IFormData } from '../../interfaces/IFormData';
import { useHistory } from 'react-router';
import targetPageUrl from '../../services/appRouterHandler';
import { researchGet } from '../../services/coreApi';

const SearchForm: React.FC = () => {
  const history = useHistory();
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

  const clearInputErrorOnFocus = (event: React.FocusEvent<HTMLInputElement>) =>
    clearInputError(event.target.id);

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

      const hasResults = await researchGet(data);

      if (hasResults.totalHits === 0) throw new Error('not found');

      history.push(`/${targetPageUrl(data)}`);

      reset();
      handleFormClose();
    } catch (err) {
      if (err.message === 'NO_QUERY') {
        for (const error in err.error) {
          insertInputError(error);
        }
        formRef.current?.setErrors(err.error);
        setIsLoading(false);
      } else {
        formRef.current?.setErrors({
          authors: 'Não foi encontrado resultado para sua pesquisa',
          title: 'Não foi encontrado resultado para sua pesquisa',
        });
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
          placeholder='Autor 1 / Autor 2 / .... / Autor x (verifique a acentuação)'
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
