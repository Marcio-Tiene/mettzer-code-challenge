import styled, { css } from 'styled-components';
interface IInput {
  inputError: boolean;
}

export const FormField = styled.fieldset`
  width: 100%;

  padding-left: 3px;
  padding-right: 3px;
  height: 80px;

  display: flex;
  flex-direction: column;
  border: none;
  .error {
    color: ${({ theme }) => theme.colors.wrong};
    font-size: 0.7rem;
    align-self: flex-end;
    margin-right: 1ch;
  }
  label {
    color: ${({ theme }) => theme.colors.textOnPrimary};
    font-weight: 600;
    text-indent: 1ch;
    ${(p: IInput) =>
      p.inputError &&
      css`
        color: ${({ theme }) => theme.colors.wrong};
      `}
  }

  input {
    color: ${({ theme }) => theme.colors.textOnPrimary};
    text-indent: 1ch;
    border-radius: 13px;
    font-size: 1rem;
    line-height: 1.7rem;
    border: none;
    width: 100%;
    transition: linear 0.2s;
    overflow: hidden;
    -webkit-box-shadow: inset 6px 6px 3px #a8a8a8,
      inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light};
    -moz-box-shadow: inset 6px 6px 3px #a8a8a8,
      inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light};
    box-shadow: inset 6px 6px 3px #a8a8a8,
      inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light};

    &:focus {
      outline: none;
      -webkit-box-shadow: inset 6px 6px 3px #a8a8a8,
        inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light},
        0 0 0 2px ${({ theme }) => theme.colors.primary.main};
      -moz-box-shadow: inset 6px 6px 3px #a8a8a8,
        inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light},
        0 0 0 2px ${({ theme }) => theme.colors.primary.main};
      box-shadow: inset 6px 6px 3px #a8a8a8,
        inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light},
        0 0 0 2px ${({ theme }) => theme.colors.primary.main};

      background-color: ${(p) => p.theme.colors.mainBg.light};
    }
    ${(p: IInput) =>
      p.inputError &&
      css`
        outline: none;
        -webkit-box-shadow: inset 6px 6px 3px #a8a8a8,
          inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light},
          0 0 0 2px ${({ theme }) => theme.colors.wrong};
        -moz-box-shadow: inset 6px 6px 3px #a8a8a8,
          inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light},
          0 0 0 2px ${({ theme }) => theme.colors.wrong};
        box-shadow: inset 6px 6px 3px #a8a8a8,
          inset -6px -6px 3px ${(p) => p.theme.colors.mainBg.light},
          0 0 0 2px ${({ theme }) => theme.colors.wrong};

        background-color: ${(p) => p.theme.colors.mainBg.light};
      `}
  }
`;
