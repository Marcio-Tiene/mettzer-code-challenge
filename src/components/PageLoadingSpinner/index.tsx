import styled, { keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const rotate = keyframes`
from {
  transform: rotate(0deg);
}

to {
  transform: rotate(360deg);
}
`;
const PageLoadingSpiner = styled(AiOutlineLoading3Quarters)`
  color: #ffffff;
  width: 30vh;
  max-width: 30vw;
  height: 30vh;
  max-height: 30vw;
  color: ${(p) => p.theme.colors.tertiary.main};

  animation: ${rotate} 1s linear infinite;
`;

export default PageLoadingSpiner;
