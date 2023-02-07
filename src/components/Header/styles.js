import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 11.6rem;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  flex-wrap: nowrap;

  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 0 12rem;

  > h1 {
    color: ${({ theme }) => theme.COLORS.RED_100};
    font-size: 2.4rem;

    display: flex;
    flex-wrap: nowrap;

    align-items: baseline;

    img {
      height: 3.2rem;
      width: 3.2rem;
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9rem;

  *:focus-visible {
    outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    outline-offset: 3px;
    border-radius: 10px;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-items: center;

    a {
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      text-align: right;
    }

    strong {
      font-size: 1.4rem;
      line-height: 1.8rem;
      color: ${({ theme }) => theme.COLORS.WHITE_200};
    }
  }

  /* img {
    width: 6.4rem;
    height: 6.4rem;
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
  } */
`;
