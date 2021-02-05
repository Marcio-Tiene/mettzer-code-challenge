import styled, { css } from 'styled-components';
interface ITextArea {
  textAreaError: boolean;
}

export const FormFieldTextArea = styled.fieldset`
  margin: 0;
  padding: 0;
  padding-left: 3px;
  padding-right: 3px;
  height: 112px;
  width: 100%;

  display: flex;
  flex-direction: column;
  border: none;

  label {
    color: ${({ theme }) => theme.colors.textOnPrimary};
    font-weight: 600;
    text-indent: 1ch;
    ${(p: ITextArea) =>
      p.textAreaError &&
      css`
        color: ${({ theme }) => theme.colors.wrong};
      `}
  }

  textarea {
    resize: none;
    color: ${({ theme }) => theme.colors.textOnPrimary};
    text-indent: 1ch;
    border-radius: 13px;
    font-size: 1rem;
    line-height: 1.7rem;
    border: none;
    width: 100%;
    transition: linear 0.2s;
    overflow: hidden;
    box-shadow: inset 6px 6px 3px #a8a8a8,
      inset -6px -6px 3px ${({ theme }) => theme.colors.mainBg.light};

    &:focus {
      outline: none;
      -webkit-box-shadow: inset 6px 6px 3px #a8a8a8,
        inset -1px -1px 3px ${({ theme }) => theme.colors.mainBg.light},
        0 0 0 2px ${({ theme }) => theme.colors.primary.main};
      -moz-box-shadow: inset 6px 6px 3px #a8a8a8,
        inset -1px -1px 3px ${({ theme }) => theme.colors.mainBg.light},
        0 0 0 2px ${({ theme }) => theme.colors.primary.main};
      box-shadow: inset 6px 6px 3px #a8a8a8, inset -1px -1px 3px,
        0 0 0 2px ${({ theme }) => theme.colors.primary.main};

      background-color: ${({ theme }) => theme.colors.mainBg.light};
    }
    ${(p: ITextArea) =>
      p.textAreaError &&
      css`
        outline: none;
        -webkit-box-shadow: inset 6px 6px 3px #a8a8a8,
          inset -1px -1px 3px ${({ theme }) => theme.colors.mainBg.light},
          0 0 0 2px ${({ theme }) => theme.colors.wrong};
        -moz-box-shadow: inset 6px 6px 3px #a8a8a8,
          inset -1px -1px 3px ${({ theme }) => theme.colors.mainBg.light},
          0 0 0 2px ${({ theme }) => theme.colors.wrong};
        box-shadow: inset 6px 6px 3px #a8a8a8,
          inset -1px -1px 3px ${({ theme }) => theme.colors.mainBg.light},
          0 0 0 2px ${({ theme }) => theme.colors.wrong};

        background-color: ${({ theme }) => theme.colors.mainBg.light};
      `}
  }
`;
