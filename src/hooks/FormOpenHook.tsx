/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { useContext } from 'react';
import {
  FormOpenContext,
  SetIsFormOpenOpen,
} from '../contexts/FormOpenContext';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const FormOpenHook = () => {
  const { isFormOpen } = useContext(FormOpenContext);
  const setIsFormOpen = useContext(SetIsFormOpenOpen) as React.Dispatch<
    React.SetStateAction<boolean>
  >;

  return { isFormOpen, setIsFormOpen };
};

export default FormOpenHook;
