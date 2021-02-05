import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../Input';
import TextArea from '../TextArea';
import FormContainer from './styles';
import ModalBackground from '../ModalBackground';
import Button from '../Button';

interface FormData {
  name: string;
  email: string;
}
const SearchForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data);
  };
  return (
    <ModalBackground open={true}>
      <FormContainer autoComplete='off' ref={formRef} onSubmit={handleSubmit}>
        <Input label='Author:' name='authors' hasError={false} />
        <Input label='Titulo:' name='title' hasError={false} />
        <TextArea label='Descrição:' name='description' hasError={false} />
        <Button isLoadindig={true} label='Testando' />
      </FormContainer>
    </ModalBackground>
  );
};
export default SearchForm;
