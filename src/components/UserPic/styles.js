import styled from 'styled-components';

export const Container = styled.img`
  width: ${({ size }) => (size ? `${size}px` : 'auto')};
  height: ${({ size }) => (size ? `${size}px` : 'auto')};

  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_700};
`;