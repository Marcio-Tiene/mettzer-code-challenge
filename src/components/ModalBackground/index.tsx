import styled from 'styled-components';
interface IModalBackground {
  show: boolean;
}
const ModalBackground = styled.dialog`
  position: absolute;

  display: ${(p: IModalBackground) => (p.show ? 'flex' : 'none')};
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

  border: none;

  background: rgba(45, 180, 190, 0.3);
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px);
`;

export default ModalBackground;
