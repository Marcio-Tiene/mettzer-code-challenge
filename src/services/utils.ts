export const capitalizeAllWords = (string: string) => {
  const spaceSpliter = string ? string.split(' ') : [];

  const wordToFirstLetterUppercase = spaceSpliter.map(
    (word) => word[0].toUpperCase() + word.slice(1)
  );

  const sentenceCapitalized = wordToFirstLetterUppercase.join(' ');

  return sentenceCapitalized;
};

export const capitalize = (sentence: string) =>
  sentence ? sentence[0].toUpperCase() + sentence.slice(1) : '';
