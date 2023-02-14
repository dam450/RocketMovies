import styled from 'styled-components'

export const Container = styled.textarea`
  resize: none;

  width: 100%;
  min-height: 27.2rem;

  padding: 1.9rem 1.6rem;

  color: ${({ theme }) => theme.COLORS.WHITE_200};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border: none;

  margin-block: 8px;
  border-radius: 10px;

  &:placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    outline-offset: 2px;
  }
`;
