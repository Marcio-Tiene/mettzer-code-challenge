import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { FormField } from './styles';

interface Props {
  name: string;
  label?: string;
  hasError: boolean;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, hasError, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
      ref: inputRef.current,
    });
  }, [fieldName, registerField]);

  return (
    <>
      <FormField inputError={hasError}>
        {label && <label htmlFor={fieldName}>{label}</label>}

        <input
          id={fieldName}
          ref={inputRef}
          defaultValue={defaultValue}
          {...rest}
        />

        {error && <span className='error'>{error}</span>}
      </FormField>
    </>
  );
};

export default Input;
