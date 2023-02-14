import styled from 'styled-components'
import BgCinema from '@/assets/cinema.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Form = styled.form`
  padding: 0 10rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  text-align: left;

  > h2 {
    font-size: 4.8rem;
    line-height: 6.3rem;
    color: ${({ theme }) => theme.COLORS.RED_100};
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }

  > h3 {
    font-weight: 500;
    font-size: 2.4rem;
    line-height: 3.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE_200};

    margin: 4.8rem 0;
  }

  > div + div {
    margin-top: 0.8rem;
  }

  > button {
    margin-top: 1.6rem;
  }

  > a {
    margin-top: 4.2rem;

    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.RED_100};

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Background = styled.div`
  flex: 1;

  background: linear-gradient(
      90deg,
      ${({ theme }) => theme.COLORS.BACKGROUND_800},
      #FFF0
    ),
    url(${BgCinema}) no-repeat center center;

  background-size: cover;
  opacity: 0.4;
`;
