import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';
import Input from '../Input';
import TextArea from '../TextArea';
import FormContainer from './styles';

interface FormData {
  name: string;
  email: string;
}
const Form: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };
  return (
    <FormContainer ref={formRef} onSubmit={handleSubmit}>
      <Input label='Author' name='authors' hasError={false} />
      <Input label='Titulo' name='title' hasError={false} />
      <TextArea label='Descrição' name='description' hasError={false} />
    </FormContainer>
  );
};
export default Form;
