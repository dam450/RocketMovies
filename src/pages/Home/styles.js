import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;

  grid-template-areas:
    'header'
    'content';
`;

export const Content = styled.main`
  max-width: 113rem;
  margin: 0 auto;

  padding: 0 2rem;

  grid-area: content;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 4rem 0;

    h2 {
      font-weight: 400;
      font-size: 32px;
      line-height: 42px;

      color: ${({ theme }) => theme.COLORS.WHITE_900}; 
    }
  }
`;

export const MovieList = styled.div`
  display: flex;
  flex-direction: column;
  height: 60vh;
  overflow-y: scroll;
  padding-right: 1rem;
  gap: 2.4rem;
  margin-bottom: 1rem;
`;

export const Movie = styled(Link)`
  *:focus-visible {
    outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    outline-offset: 2px;
  }

  border-radius: 16px;
  padding: 3.2rem;
  margin: 3px;

  height: fit-content;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: #999591; //GRAY_400

  > p {
    height: 4rem;
    width: 100%;

    overflow: hidden;
    /* white-space: nowrap; */
    text-overflow: ellipsis;

    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

    margin-bottom: 2rem;

    font-family: Roboto, sans-serif;
    font-size: 1.6rem;
    line-height: 1.9rem;

    /* ellipsis */
    position: relative;
    height: 2.4em; /* exactly 2 lines */
  }

  > p::after {
    /* ellipsis */
    content: '';
    text-align: right;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 50%;
    height: 1.2em;
    background: linear-gradient(to right, #ffffff00, ${({ theme }) => theme.COLORS.BACKGROUND_600} 95%);
  }

  > .small {
    img {
      width: 12px;
      height: 12px;
    }
  }

  > h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;

    color: ${({ theme }) => theme.COLORS.WHITE_200};
  }
`;