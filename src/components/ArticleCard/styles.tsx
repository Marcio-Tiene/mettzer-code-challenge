import styled from 'styled-components';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
export const CardArticle = styled.article`
  position: relative;
  min-height: 2rem;
  height: fit-content;
  width: 90vw;

  border-radius: 13px;
  -moz-box-shadow: ${(p) => p.theme.boxShadow};
  -webkit-box-shadow: ${(p) => p.theme.boxShadow};
  box-shadow: ${(p) => p.theme.boxShadow};

  margin-top: 50px;

  background-color: ${(p) => p.theme.colors.mainBg.light};
`;
export const StarSpan = styled.span`
  cursor: pointer;
  width: 2rem;
`;
export const StartIconChecked = styled(AiTwotoneStar)`
  position: absolute;
  top: 1rem;
  color: gold;
  height: 2rem;
  width: 2rem;
`;
export const StartIconUnChecked = styled(AiOutlineStar)`
  position: absolute;
  top: 1rem;
  color: ${(p) => p.theme.colors.primary.main};
  height: 2rem;
  width: 2rem;
`;

export const ArticleTitleContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  background-color: ${(p) => p.theme.colors.tertiary.main};
  padding: 1rem;
`;
export const ArticleTitle = styled.h1`
  flex: 1;
  color: ${(p) => p.theme.colors.textOnTertiary};
  font-size: 2rem;

  @media (max-width: 900px) {
    font-size: 1.2rem;
  }
`;
export const IdentifiersContainer = styled.div`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding-left: 3rem;
  background-color: ${(p) => p.theme.colors.primary.main};
  color: ${(p) => p.theme.colors.textOnPrimary};

  @media (max-width: 900px) {
    h2 {
      font-size: 1rem;
    }
  }
`;

export const Description = styled.p`
  padding: 2rem;
  color: ${(p) => p.theme.colors.textOnPrimary};
  line-height: 2rem;
  text-align: justify;
`;

export const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  background-color: ${(p) => p.theme.colors.tertiary.main};
  color: ${(p) => p.theme.colors.textOnTertiary};
  padding: 1rem 2rem;
`;

export const ArticleLink = styled(Link)`
  color: ${(p) => p.theme.colors.secondary.main};
  font-weight: 600;

  -moz-word-break: break-word;
  -webkit-word-break: break-word;
  word-break: break-word;
  :hover {
    color: ${(p) => p.theme.colors.secondary.light};
  }
  :visited {
    color: ${(p) => p.theme.colors.primary.main};
  }
`;
