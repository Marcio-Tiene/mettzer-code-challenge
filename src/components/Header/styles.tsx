import styled, { StyledComponentBase } from 'styled-components';
import { GiEntryDoor } from 'react-icons/gi';

interface IHeaderContainer extends StyledComponentBase<any, {}> {
  Logo?: StyledComponentBase<'img', any, {}, never>;
}

const HeaderContainer: IHeaderContainer = styled.header`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.tertiary.main};
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
`;

HeaderContainer.Logo = styled.img`
  height: 30px;
  width: 150px;
`;

export const BackToHomeLink = styled(GiEntryDoor)`
  color: ${(p) => p.theme.colors.primary.main};
  transition: linear 0.2s;
  height: 30px;
  width: 30px;

  margin-right: 20px;
  cursor: pointer;
  :hover {
    color: ${(p) => p.theme.colors.primary.light};
  }
`;

export default HeaderContainer;
