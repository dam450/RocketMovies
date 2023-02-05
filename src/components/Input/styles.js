import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-radius: 10px;

  padding: 1.6rem;

  width: min(100%, 50rem);
  min-width: 20rem;

  display: flex;
  align-items: center;
  gap: 5px;

  :has(input:focus-visible) {
    outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    outline-offset: 2px;
  }

  > input {
    border: none;
    background-color: transparent;

    width: 100%;

    color: ${({ theme }) => theme.COLORS.WHITE_100};
    font-size: 1.4rem;
    line-height: 1.8rem;
  }
  > svg {
    color: ${({ theme }) => theme.COLORS.GRAY_300}; 
  }
`;
