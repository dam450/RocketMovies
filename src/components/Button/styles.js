import styled from 'styled-components';

export const Container = styled.button`
  padding: 13px 32px;
  gap: 8px;

  background: ${({ theme }) => theme.COLORS.RED_100}; 
  border: none;
  border-radius: 8px;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  &:focus-visible {
    outline: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
    outline-offset: 2px;
  }
`;