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
  cursor: pointer;
`;

export const BackToHomeLink = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: ${(p) => p.theme.colors.textOnTertiary};
  font-size: 0.7rem;
  transition: linear 0.2s;
  margin-right: 20px;
  cursor: pointer;

  :hover {
    color: ${(p) => p.theme.colors.primary.light};
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const BackToHomeLinkIcon = styled(GiEntryDoor)`
  color: ${(p) => p.theme.colors.primary.main};
  transition: linear 0.2s;
  height: 30px;
  width: 30px;

  :hover {
    color: ${(p) => p.theme.colors.primary.light};
  }
`;

export default HeaderContainer;
