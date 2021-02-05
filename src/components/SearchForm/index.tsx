import React, { useRef, useState } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../Input';
import TextArea from '../TextArea';
import FormContainer from './styles';
import ModalBackground from '../ModalBackground';
import Button from '../Button';
import { hasQuery, noQuerError } from './services/FormErroHandler';

export interface IFormData {
  authors: string;
  title: string;
  description: string;
}
const SearchForm: React.FC = () => {
  const hasNoInputerros = { authors: false, title: false, description: false };
  const [hasInputError, setHasInputError] = useState(hasNoInputerros);
  const [isLoading, setIsLoading] = useState(false);

  const insertInputError = (inputName: string): void => {
    setHasInputError((prevState) => {
      return { ...prevState, [inputName]: true };
    });
  };
  const clearInputError = (inputName: string): void => {
    setHasInputError({ ...hasInputError, [inputName]: false });
    formRef.current?.setFieldError(inputName, '');
  };

  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<IFormData> = (data) => {
    try {
      setIsLoading(true);
      hasQuery(data);
      console.log(data);
    } catch (err) {
      if (err.message === 'NO_DATA') {
        formRef.current && formRef.current?.setErrors(noQuerError);
        for (const error in noQuerError) {
          insertInputError(error);
        }
        setIsLoading(false);
      }
    }
  };
  return (
    <ModalBackground open={true}>
      <FormContainer onSubmit={handleSubmit} autoComplete='off' ref={formRef}>
        <Input
          label='Author:'
          name='authors'
          hasError={hasInputError.authors}
          onFocus={() => clearInputError('authors')}
        />
        <Input
          label='Titulo:'
          name='title'
          hasError={hasInputError.title}
          onFocus={() => clearInputError('title')}
        />
        <TextArea
          label='Descrição:'
          name='description'
          hasError={hasInputError.description}
          onFocus={() => clearInputError('description')}
        />
        <Button isLoadindig={isLoading} label='Testando' />
      </FormContainer>
    </ModalBackground>
  );
};
export default SearchForm;
