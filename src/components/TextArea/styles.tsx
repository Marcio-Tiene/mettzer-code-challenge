import styled, { css } from 'styled-components';
interface ITextArea {
  textAreaError: boolean;
}

export const FormFieldTextArea = styled.fieldset`
  margin: 0;
  padding: 0;
  padding-left: 3px;
  padding-right: 3px;
  height: 80px;

  display: flex;
  flex-direction: column;
  border: none;
  textarea {
    resize: none;
    color: #000;

    text-indent: 1ch;
    border-radius: 2px;
    font-size: 1rem;
    line-height: 1.5rem;
    border: none;
    width: 400px;
    transition: linear 0.2s;
    overflow: hidden;
    &:focus {
      outline: none;
      -webkit-box-shadow: 0 0 0 1px #008000;
      -moz-box-shadow: 0 0 0 1px #008000;
      box-shadow: 0 0 0 1px #008000;
      background-color: transparent;
    }
    ${(p: ITextArea) =>
      p.textAreaError &&
      css`
        -webkit-box-shadow: inset 4px 4px 4px #ff0000, 0 0 0 1px #ff0000;
        -moz-box-shadow: inset 4px 4px 4px #ff0000, 0 0 0 1px #ff0000;
        box-shadow: inset 4px 4px 4px #ff0000, 0 0 0 1px #ff0000;
        background-color: rgba(255, 0, 0, 0.185);
        overflow: hidden;
      `}
  }
`;
