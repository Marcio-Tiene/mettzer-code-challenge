import React, { createContext, useState } from 'react';

const FormOpenContext = createContext({
  isFormOpen: false,
});
const SetIsFormOpenOpen = createContext<null | React.Dispatch<
  React.SetStateAction<boolean>
>>(null);

const FormOpenContextProvider: React.FC = ({ children }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <FormOpenContext.Provider value={{ isFormOpen: isFormOpen }}>
      <SetIsFormOpenOpen.Provider value={setIsFormOpen}>
        {children}
      </SetIsFormOpenOpen.Provider>
    </FormOpenContext.Provider>
  );
};

export { FormOpenContextProvider, SetIsFormOpenOpen, FormOpenContext };
