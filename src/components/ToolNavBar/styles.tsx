import styled, { StyledComponentBase } from 'styled-components';

interface INavBar extends StyledComponentBase<'nav', any, {}> {
  BreadCrumbs?: StyledComponentBase<'div', any, {}, never>;
}

const NavBar: INavBar = styled.nav`
  width: 100vw;
  height: fit-content;

  padding: 10px 20px;
  gap: 10px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  background-color: ${({ theme }) => theme.colors.primary.main};

  &.error-404 {
    button {
      display: none;
    }
  }
`;

NavBar.BreadCrumbs = styled.div`
  flex: auto;

  display: flex;
  align-items: center;
  width: fit-content;

  color: ${({ theme }) => theme.colors.textOnPrimary};

  &.error-404 {
    flex: inherit;
  }
`;

export default NavBar;
