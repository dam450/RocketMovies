import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;

  grid-template-areas:
    'header'
    'content';
`;

export const Content = styled.div`
  grid-area: content;

  margin: 4rem 12rem 15rem;
  padding: 0 2rem 0 0.4rem;

  height: 70vh;
  overflow-y: scroll;

  > a:first-child {
    color: ${({ theme }) => theme.COLORS.RED_100};
    display: inline-flex;
    align-items: center;

    margin: 3px 3px 2.4rem;
  }

  h2 {
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({ theme }) => theme.COLORS.WHITE_200};
    margin-bottom: 4rem;
  }

  h3 {
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    margin: 4rem 0 2.4rem;
  }

  .markers {
    display: flex;
    width: 100%;
    gap: 2rem;
    border-radius: 8px;

    margin-bottom: 4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    min-height: 8rem;

    padding: 1.6rem;

    flex-wrap: wrap;
  }

  .row {
    display: inline-flex;
    width: 100%;
    gap: 4rem;
    border-radius: 8px;

    margin-bottom: 4rem;

    div {
      width: 100%;
    }

    button {
      width: 100%;

      &:first-child {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.RED_100};
      }
    }
  }
`;
