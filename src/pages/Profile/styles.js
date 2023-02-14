import styled from 'styled-components';

export const Container = styled.div`
  * {
    /* border: 1px solid red; */
  }

  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 14.4rem auto;
  grid-template-areas:
    'header'
    'content';
`;

export const Header = styled.header`
  grid-area: header;

  height: 100%;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: min(14rem, 10vw );

  > a {
    color: red;
    display: flex;
    align-items: center;
    gap: 08px;

    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.RED_100};
  }
`;

export const Content = styled.div`
  grid-area: content;

  display: flex;
  justify-content: center;

  > form {
    transform: translateY(-9rem);
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 34rem;
    gap: 8px;

    input,
    button {
      width: 100%;
    }

    img {
      margin-bottom: 6.4rem;
    }

    div:nth-child(4) {
      margin-top: 1.6rem;
    }

    button {
      margin-top: 1.6rem;
    }
  }
`;

export const Avatar = styled.div`
  position: relative;

  > label:hover {
    filter: brightness(0.9);
  }

  > label {
    width: 48px;
    height: 48px;
    padding: 1.4rem;
    background-color: ${({ theme }) => theme.COLORS.RED_100};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 30%;
    right: 0%;

    cursor: pointer;

    .hidden {
      display: none;
    }

    svg {
      stroke: ${({ theme }) => theme.COLORS.BACKGROUND_500};
      width: 20px;
      height: 20px;
    }
  }
`;
