import styled, { StyledComponentBase } from 'styled-components';

interface IHeaderContainer extends StyledComponentBase<any, {}> {
  Logo?: StyledComponentBase<'img', any, {}, never>;
}

const HeaderContainer: IHeaderContainer = styled.header`
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.tertiary.main};
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

HeaderContainer.Logo = styled.img`
  height: 30px;
  width: 150px;
`;

export default HeaderContainer;
