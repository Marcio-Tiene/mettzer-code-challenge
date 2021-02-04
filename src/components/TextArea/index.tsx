import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FormFieldTextArea } from './styles';

interface Props {
  name: string;
  label?: string;
  hasError: boolean;
}

type TextAreaProps = JSX.IntrinsicElements['textarea'] & Props;

const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  hasError,
  ...rest
}) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: textAreaRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      <FormFieldTextArea textAreaError={hasError}>
        {label && <label htmlFor={fieldName}>{label}</label>}

        <textarea
          rows={4}
          cols={50}
          id={fieldName}
          ref={textAreaRef}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && <span className='error'>{error}</span>}
      </FormFieldTextArea>
    </>
  );
};

export default TextArea;
