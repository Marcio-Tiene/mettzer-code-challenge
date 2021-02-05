import React from 'react';
import { callbackify } from 'util';
import { BaseButton, LoadingSpiner } from './styles';
interface IButton {
  isLoadindig?: boolean;
  onClick?: () => void;
  label: string;
}
const Button: React.FC<IButton> = ({ label, isLoadindig, onClick }) => {
  return (
    <>
      <BaseButton
        className='search-button'
        minWidth={`calc(2rem + ${label.length}ch)`}
        disabled={isLoadindig}
        onClick={onClick}
      >
        {isLoadindig ? <LoadingSpiner /> : label}
      </BaseButton>
    </>
  );
};

export default Button;
