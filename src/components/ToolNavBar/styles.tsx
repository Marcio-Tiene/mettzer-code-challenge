import styled, { StyledComponentBase } from 'styled-components';

interface INavBar extends StyledComponentBase<'nav', any, {}> {
  BreadCrumbs?: StyledComponentBase<'div', any, {}, never>;
}

const NavBar: INavBar = styled.nav`
  width: 100vw;
  height: 50px;

  padding: 0 20px;

  display: flex;
  align-items: center;
  flex-wrap: wrap;

  background-color: ${({ theme }) => theme.colors.primary.main};
`;

NavBar.BreadCrumbs = styled.div`
  flex: auto;

  display: flex;
  align-items: center;
  width: fit-content;

  color: ${({ theme }) => theme.colors.textOnPrimary};
`;

export default NavBar;
