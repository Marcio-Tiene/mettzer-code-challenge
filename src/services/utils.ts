import { IData } from '../interfaces/IFormData';

export const capitalizeAllWords = (string: string) => {
  if (!!string) {
    const spaceSpliter = string ? string.split(' ') : ['a', 'b'];

    const wordToFirstLetterUppercase = spaceSpliter.map(
      (word) => word[0].toUpperCase() + word.slice(1)
    );

    const sentenceCapitalized = wordToFirstLetterUppercase.join(' ');

    return sentenceCapitalized;
  } else {
    return '';
  }
};

export const capitalize = (sentence: string) =>
  sentence ? sentence[0].toUpperCase() + sentence.slice(1) : '';

export const dataInitialState = [
  { title: '', id: '', authors: [''], urls: [''], description: '', type: '' },
] as IData[];
