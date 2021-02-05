import React from 'react';
import { IconType } from 'react-icons';
import { BaseButton, LoadingSpiner } from './styles';
interface IButton {
  isLoadindig?: boolean;
  onClick?: () => void;
  label: string;
  Icon?: IconType;
  iconSize?: number;
}
const Button: React.FC<IButton> = ({
  label,
  isLoadindig,
  onClick,
  Icon,
  iconSize,
}) => {
  const gap = 0.7;
  const minLoadingWidth = !!iconSize
    ? label.length + iconSize + gap
    : label.length;

  return (
    <>
      <BaseButton
        style={{ gap: `${gap}ch` }}
        className='search-button'
        minWidth={`calc(2rem + ${minLoadingWidth}ch)`}
        disabled={isLoadindig}
        onClick={onClick}
      >
        {isLoadindig ? (
          <LoadingSpiner />
        ) : (
          iconSize && (
            <Icon style={{ width: `${iconSize}ch`, height: `${iconSize}ch` }} />
          )
        )}
        {isLoadindig ? '' : label}
      </BaseButton>
    </>
  );
};

export default Button;
