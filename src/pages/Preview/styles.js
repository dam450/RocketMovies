import styled from "styled-components";

export const Container = styled.div`

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 11.6rem auto;

  grid-template-areas:
    'header'
    'content';
`;

export const Content = styled.main`
  grid-area: content;

  margin: 4rem 12rem 15rem;
  padding-right: 2rem;

  height: 70vh;
  overflow-y: auto;

  > a {
    color: ${({theme}) => theme.COLORS.RED_100};
    display: inline-flex;
    align-items: center;

    margin: 3px 3px 2.4rem;
  }

  > p {
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 130%;

    display: flex;
    align-items: center;
    text-align: justify;

    margin-bottom: 3rem;
  }
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 36px;
  line-height: 47px;
  margin-bottom: 2.4rem;
`;

export const Author = styled.cite`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.9rem;

  margin-bottom: 4rem;

  display: flex;
  align-items: center;
  gap: 0.8rem;

  > span {
    margin-right: 0.8rem;
    display: flex;
    align-items: center;

    > img, svg {
      transform: translateY(-5%);
      margin-right: 5px;
    }

    svg {
      stroke: ${({ theme }) => theme.COLORS.RED_100};
    }
  }
`;

export const Tags = styled.div`
  margin-bottom: 4rem;
`;
